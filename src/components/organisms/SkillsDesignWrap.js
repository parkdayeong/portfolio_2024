import React from 'react';
import data from '../../assets/data/skilldata';
import styled from 'styled-components';
import Heading from '../atoms/Heading';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

const CustomLinearProgress = styled(LinearProgress)`
  height: 15px !important;
  border-radius: 30px;

  & .MuiLinearProgress-bar {
    background-color: #ffb400;
  }

  background-color: #eee !important;
`;

function SkillsDesignWrap() {
  const skillsList = data.designskillList.map((list, idx) => (
    <div className='skill-list' key={idx}>
      <Heading level='3' className='skill-label'>
        <i className={list.icon}></i>: {list.label}
      </Heading>

      <ul className='skill-detail'>
        {list.detail.map((detail, idx) => (
          <li key={idx}>{detail}</li>
        ))}
      </ul>

      <Box>
        <ProgressBarWrapper>
          <CustomLinearProgress variant='determinate' value={list.percent} />
          <ProgressLabel>{list.percent}%</ProgressLabel>
        </ProgressBarWrapper>
      </Box>
    </div>
  ));
  return <StyledSkillsWrap>{skillsList}</StyledSkillsWrap>;
}

const ProgressBarWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 10px;
`;

const ProgressLabel = styled.span`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translate(-50%, -50%);
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: -1px;
  color: #111;
`;

const StyledSkillsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;

  .skill-list {
    width: calc(33% - 30px);
    margin: 10px 15px 30px;
    padding: 20px 30px 20px 30px;
    border: 1px solid #252525;
    border-radius: 5px;
    cursor: default;

    .skill-label {
      margin-bottom: 10px;

      i {
        color: ${(props) => props.theme.mainColor};
        padding-right: 10px;
        font-size: 50px;
        vertical-align: text-top;
      }
    }

    .skill-detail {
      margin-top: 20px;
      li {
        position: relative;
        padding: 0 0 10px 30px;
        font-size: 14px;
        line-height: 1.5;
        color: rgb(255 255 255 / 80%);

        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 13px;
          width: 20px;
          height: 1px;
          background: ${(props) => props.theme.mainColor};
        }
      }
    }
  }

  @media ${(props) => props.theme.laptop} {
    width: 85%;
    margin: auto;

    .skill-list {
      width: calc(50% - 30px);
    }
  }

  @media ${(props) => props.theme.mobile} {
    width: 90%;

    .skill-list {
      width: calc(100% - 30px);
    }
  }

  .skill-list {
    position: relative;

    &::before,
    &::after {
      content: '';
      box-sizing: inherit;
      position: absolute;
      width: 100%;
      height: 100%;
      border: 1px solid transparent;
      width: 0;
      height: 0;
      border-radius: 5px;
    }

    &::before {
      top: 0;
      left: 0;
    }

    &::after {
      bottom: 0;
      right: 0;
    }

    &:hover {
      &::before,
      &::after {
        width: 100%;
        height: 100%;
      }

      &::before {
        border-top-color: ${(props) => props.theme.mainColor};
        border-right-color: ${(props) => props.theme.mainColor};
        transition: width 0.15s ease-out, height 0.15s ease-out 0.15s;
      }

      &::after {
        border-bottom-color: ${(props) => props.theme.mainColor};
        border-left-color: ${(props) => props.theme.mainColor};
        transition: border-color 0s ease-out 0.3s, width 0.15s ease-out 0.3s,
          height 0.15s ease-out 0.45s;
      }
    }
  }
`;

export default SkillsDesignWrap;
