/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"
import { breakpoints, colors, radii, shadows, space } from "../../utils/presets"

const boldEntry = keyframes`
  100% {
    transform: scale(1);
    opacity: 1;
  }
`

const opacityEntry = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`

const WrapperDiv = styled(`div`)`
  background-color: ${colors.white};
  border: 1px solid ${colors.gray.border};
  border-radius: ${radii[2]}px;
  height: 100%;
  opacity: 0.5;
  overflow-y: auto;
  padding: ${space[6]} ${space[4]};
  width: 100%;
  z-index: 2;

  [tabindex="-1"]:focus {
    outline: none;
  }

  .opened & {
    animation: ${boldEntry} 0.5s ease forwards;
  }

  .failed &,
  .success & {
    animation: ${opacityEntry} 0.5s ease forwards;
  }

  @media screen and (prefers-reduced-motion: reduce) {
    .opened & {
      animation: none;
      transform: scale(1);
      opacity: 1;
    }

    .failed &,
    .success & {
      animation: none;
      transform: scale(1);
      opacity: 1;
    }
  }

  .submitting & {
    transform: scale(1);
    opacity: 1;
  }

  ${breakpoints.lg} {
    box-shadow: ${shadows.overlay};
    height: 100%;
    padding: ${space[7]} ${space[6]};
    transform: scale(0);
    transform-origin: top center;
  }
`

const WidgetWrapper = ({ children, handleClose = () => {} }) => {
  const handleEscapeKey = event => {
    if (event.keyCode === 27) {
      handleClose()
    }
  }

  return (
    <WrapperDiv role="dialog" onKeyDown={handleEscapeKey}>
      {children}
    </WrapperDiv>
  )
}

export default WidgetWrapper
