"use client";
import { SxProps, Theme } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

type Props = {
  sx?: SxProps<Theme>;
};

const TwitterIcon: React.FC<Props> = ({ sx }) => {
  return (
    <Box
      component="svg"
      version="1.1"
      id="_x32_"
      viewBox="0 0 512 512"
      sx={[
        {
          width: 42,
          height: 42,
          fill: (theme) => theme.palette.secondary.dark,
          backgroundColor: "secondary.light",
          borderRadius: '50%',
          borderColor: 'white',
          cursor: "pointer"
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box component="g">
        <Box
          component="path"
          d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M260.926,217.391   c0.084,0.004,0.164,0.021,0.25,0.025c-0.875-3.752-1.328-7.664-1.328-11.682c0-28.307,22.951-51.258,51.262-51.258   c14.742,0,28.063,6.225,37.414,16.188c9.6-1.89,18.684-5.174,27.129-9.523c1.781-0.864,3.566-1.723,5.32-2.674   c-3.039,9.334-8.744,17.412-16.141,23.532c-2.004,1.576-4.062,3.098-6.326,4.344c0.154-0.018,0.304-0.052,0.457-0.071   c-0.15,0.093-0.275,0.22-0.428,0.312c8.402-1.005,16.459-3.051,24.111-5.942c1.715-0.592,3.428-1.191,5.127-1.852   c-6.842,10.159-15.453,19.095-25.375,26.259c0.098,2.197,0.148,4.406,0.148,6.631c0,67.736-51.558,145.842-145.844,145.842   c-28.947,0-55.891-8.484-78.576-23.028c4.01,0.473,8.092,0.715,12.229,0.715c19.136,0,37.014-5.269,52.383-14.34   c3.871-2.23,7.658-4.639,11.273-7.365c-0.098-0.002-0.187-0.026-0.285-0.028c0.094-0.073,0.196-0.136,0.289-0.209   c-19.422-0.358-36.184-11.539-44.574-27.747c-1.25-2.489-2.32-5.096-3.164-7.831c3.086,0.58,6.246,0.898,9.5,0.898   c3.391,0,6.666-0.436,9.871-1.063c1.197-0.168,2.406-0.308,3.586-0.502c-0.156-0.032-0.293-0.1-0.449-0.133   c0.162-0.042,0.336-0.056,0.496-0.1c-23.449-4.709-41.119-25.428-41.119-50.262c0-0.196,0.002-0.387,0.004-0.58l0.024-0.055   c5.521,3.064,11.693,5.092,18.23,5.94c1.609,0.269,3.221,0.516,4.832,0.657c-0.11-0.074-0.205-0.164-0.314-0.238   c0.152,0.006,0.297,0.036,0.447,0.041c-13.754-9.191-22.803-24.883-22.803-42.666c0-8.142,1.988-15.787,5.367-22.623   c0.539-1.028,1.018-2.078,1.637-3.074c22.711,27.822,55.516,46.971,92.801,52.15c4.16,0.605,8.332,1.144,12.553,1.388   C260.934,217.443,260.932,217.416,260.926,217.391z"
        />
      </Box>
    </Box>
  );
};

export default TwitterIcon;
