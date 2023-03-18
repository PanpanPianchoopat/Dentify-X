import React, { useEffect, useState } from "react";

import {
  Box,
  BoxHead,
  HorizontalLine,
  DetailWrapper,
  Detail,
  LevelContainer,
  Level,
  StyledProgress,
  NotFoundWrapper,
  StyledImage,
} from "./styled";
import colors from "../../../../public/constants/colors";

export default function ResultBox({ ...props }) {
  const [levels, setLevels] = useState(null);

  useEffect(() => {
    if (props.result.classified_result) {
      const prediction =
        props.result.classified_result[0].difficulty_confidence;
      const levelList = [];
      Object.keys(prediction).map((key) => {
        levelList.push({
          level: key,
          value: (prediction[key] * 100).toFixed(2),
        });
      });
      const sortedLevel = levelList.sort((l1, l2) =>
        l1.value < l2.value ? 1 : l1.value > l2.value ? -1 : 0
      );
      setLevels(sortedLevel);
    }
  }, [props.result]);

  return (
    props.result && (
      <Box customColor={props.result.side}>
        <BoxHead customColor={props.result.side}>
          {props.result.side.toUpperCase()}
        </BoxHead>
        <HorizontalLine customColor={props.result.side} />
        <DetailWrapper>
          <Detail>
            {levels ? (
              levels.map(({ level, value }, idx) => {
                return (
                  <LevelContainer key={idx}>
                    <Level>
                      <b
                        style={{
                          fontSize: idx == 0 ? "18px" : "14px",
                          color:
                            idx == 0
                              ? props.result.side === "right"
                                ? colors.PURPLE
                                : colors.PRIMARY_BLUE
                              : colors.NAVY,
                        }}
                      >
                        {level && level.charAt(0).toUpperCase()}
                        {level && level.slice(1)}
                      </b>
                      <b
                        style={{
                          fontSize: idx == 0 ? "18px" : "14px",
                          color:
                            idx == 0
                              ? props.result.side === "right"
                                ? colors.PURPLE
                                : colors.PRIMARY_BLUE
                              : "black",
                        }}
                      >
                        {value && value}%
                      </b>
                    </Level>
                    <StyledProgress
                      percent={value}
                      strokeWidth={idx == 0 ? 12 : 8}
                      strokeColor={
                        props.result.side === "right"
                          ? colors.PURPLE
                          : colors.PRIMARY_BLUE
                      }
                    />
                  </LevelContainer>
                );
              })
            ) : (
              <NotFoundWrapper>
                <StyledImage src="/assets/AnalyzeIcon.svg" />
                <br />
                Not Found
              </NotFoundWrapper>
            )}
          </Detail>
        </DetailWrapper>
      </Box>
    )
  );
};

