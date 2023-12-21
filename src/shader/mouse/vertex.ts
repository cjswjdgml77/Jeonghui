const vertex =
  /* glsl */
  `
  void main()
  {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
    // float size = 0.3;
    gl_PointSize = 100.0;
    gl_PointSize *= (1.0 / - viewPosition.z);

  }
`;

export default vertex;
