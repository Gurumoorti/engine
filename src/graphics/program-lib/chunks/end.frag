    #ifdef CLEARCOAT
    gl_FragColor.rgb = combineColorCC();
    #else
    gl_FragColor.rgb = combineColor();
    #endif 

    #ifdef SG_PS
    gl_FragColor.rgb += dEmission;
    #else
    gl_FragColor.rgb += getEmission();
    #endif
    gl_FragColor.rgb = addFog(gl_FragColor.rgb);

    #ifndef HDR
    gl_FragColor.rgb = toneMap(gl_FragColor.rgb);
    gl_FragColor.rgb = gammaCorrectOutput(gl_FragColor.rgb);
    #endif
