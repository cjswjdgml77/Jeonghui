import { AnimatePresence } from "framer-motion";
import { ScrollElementProp } from "./Hero";
import StickyContainer from "./components/StickyContainer";
import useShowWithScroll from "@/hook/useShowWithScroll";
import FadeDiv from "./components/FadeDiv";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const Contact = ({ scrollEl }: ScrollElementProp) => {
  const [isShow, isBack] = useShowWithScroll(3, scrollEl);
  const form = useForm({
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });
  const ref = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const validator = (type: string, value: unknown, min = 2, max = 255) => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (type === "string") {
      if (typeof value === "string") {
        if (value.length < min || value.length > max) {
          return { message: `the value length must be ${min} and ${max}` };
        }
      }
    }

    if (type === "email") {
      if (typeof value === "string") {
        if (!value.match(emailRegex)) {
          return { message: "Invalid email address" };
        }
      }
    }
  };
  const onSubmit = (formData: {
    email: string;
    name: string;
    message: string;
  }) => {
    if (!ref.current) return;
    console.log(formData);

    const name = validator("string", formData.name, 2, 20);
    const email = validator("email", formData.email);
    const message = validator("string", formData.message);

    if (name?.message) {
      form.setError("name", { type: "manual", message: name.message });
    }
    if (email?.message) {
      form.setError("email", { type: "manual", message: email.message });
    }
    if (message?.message) {
      form.setError("message", { type: "manual", message: message.message });
    }
    console.log(name, email, message);
    if (name || email || message) return false;

    setLoading(true);
    emailjs
      .sendForm(
        "service_7zcxgmj",
        "template_41pw1ks",
        ref.current,
        "StAGGrbl1x6ppJ-FX"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <StickyContainer>
      <AnimatePresence>
        {isShow && (
          <FadeDiv page={3} scrollEl={scrollEl} back={isBack}>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 w-full max-w-sm"
                ref={ref}
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your email"
                          {...field}
                          disabled={loading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          {...field}
                          disabled={loading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <textarea
                          placeholder="Your message"
                          {...field}
                          className="block resize-none w-full min-h-[20vh] px-3 py-2 text-sm placeholder:text-muted-foreground bg-transparent outline-none border-[1px] border-input disabled:cursor-not-allowed disabled:opacity-50"
                          disabled={loading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
                <Button type="submit" variant={"outline"}>
                  Send
                </Button>
              </form>
            </Form>
          </FadeDiv>
        )}
      </AnimatePresence>
    </StickyContainer>
  );
};

export default Contact;
