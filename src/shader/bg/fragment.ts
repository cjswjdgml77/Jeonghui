const fragment =
  /* glsl */
  `
    varying vec2 vUv;
    uniform vec3 uFirst;
    uniform vec3 uSecond;
    uniform vec3 uThird;
    uniform vec3 uFourth;
    void main()
    {
        // vec4 first = vec4(0.529,0.337,0.369,1.0);
        // vec4 second = vec4(0.741,0.408,0.408,1.0);
        // vec4 third = vec4(0.914,0.733,0.576,1.0);
        // vec4 fourth = vec4(0.518, 0.627, 0.729,1.0);
        vec4 first = vec4(0.322, 0.29, 0.6,1.0);
        vec4 second = vec4(0.043, 0.122, 0.227,1.0);
        vec4 third = vec4(0.239, 0.216, 0.447,1.0);
        vec4 fourth = vec4(0.055, 0.039, 0.078,1.0);
        float h = 0.2;
        gl_FragColor = mix(vec4(uFirst,1.0),mix(vec4(uSecond,1.0),mix(vec4(uThird,1.0),vec4(uFourth,1.0),smoothstep(0.0,vUv.y ,vUv.y-0.4)),smoothstep(0.0,vUv.y,vUv.y-0.3)), smoothstep(0.0,vUv.y,vUv.y-0.1));
    }
`;

export default fragment;
