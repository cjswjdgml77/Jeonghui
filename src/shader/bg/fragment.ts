const fragment =
  /* glsl */
  `
    varying vec2 vUv;
    
    void main()
    {
        vec4 first = vec4(	0.529,0.337,0.369,1.0);
        vec4 second = vec4(0.741,0.408,0.408,1.0);
        vec4 third = vec4(0.914,0.733,0.576,1.0);
        vec4 fourth = vec4(0.518, 0.627, 0.729,1.0);
        float h = 0.2;
        gl_FragColor = mix(first,mix(second,mix(third,fourth,smoothstep(0.0,vUv.y ,vUv.y-0.4)),smoothstep(0.0,vUv.y,vUv.y-0.3)), smoothstep(0.0,vUv.y,vUv.y-0.1));
    }
`;

export default fragment;
