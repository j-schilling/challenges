import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  handleTurnAllLightsOff,
  handleTurnAllLightsOn,
}) {
  return (
    <StyledQuickActions>
      <Button type="button" onClick={handleTurnAllLightsOff}>
        Turn all lights off
      </Button>
      <Button type="button" onClick={handleTurnAllLightsOn}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
