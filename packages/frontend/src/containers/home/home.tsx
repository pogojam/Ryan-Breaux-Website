import { Float, Stars } from "@react-three/drei";
import { observer } from "mobx-react";
import { Route, Routes, useLocation } from "react-router";
import { config, useTransition } from "react-spring";
import styled from "styled-components";
import { Background } from "../../components/background/background";
import { PageManager } from "../../components/page/page";
import { WarpedPlane } from "../../components/warped/warped";
import "./home.css";
import { About } from "./scene/about";
import { Scene1 } from "./scene/scene1";

const StyledHomeContainer = styled.div`
  display: inline;
`;

const HomeContainer = observer(() => {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 200,
    config: config.molasses,
  });
  return (
    <StyledHomeContainer>
      <Background>
        <Float
          speed={0.2} // Animation speed, defaults to 1
          rotationIntensity={20} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, defaults to 1
        >
          <Stars radius={100} depth={50} count={5000} factor={4} />
        </Float>
        <WarpedPlane />
        <About path={location.pathname} />
      </Background>
      <PageManager>
        {transitions((props, items) => (
          <Routes location={items}>
            <Route index element={<Scene1 style={props} />} />
            {/* <Route path="About" element={<About />} /> */}
          </Routes>
        ))}
      </PageManager>
    </StyledHomeContainer>
  );
});

export default HomeContainer;
