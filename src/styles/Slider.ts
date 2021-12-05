import styled from "styled-components"

export const ModernSlider = styled.input`
  appearance: none;
  width: 100%;
  height: 4px;

  outline: none;
  border-radius: 999px;
  background: ${({ theme }) => theme.sliderBackground};

  &::-webkit-slider-thumb,
  &::-moz-range-thumb {
    cursor: pointer;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: none;
    outline: 4px solid ${({ theme }) => theme.taskbar};
    background: ${({ theme }) => theme.primary};
  }
`

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

export const SlidersContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  gap: 20px;
  margin: 30px 0;
`
