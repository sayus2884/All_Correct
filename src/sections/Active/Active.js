import { Section, BoxWrapper, BoxItem, TextWrapper } from "./Active.styles";

import SubTitle from "../../components/SubTitle/SubTitle.js";
import SubText from "../../components/SubText/SubText.js";
import Highlight from "../../components/Highlight/Highlight.js";

function Active() {
  return (
    <Section>
      <BoxWrapper>
        <BoxItem>
          <SubTitle className="box-title">
            Active since <Highlight>2008</Highlight>
          </SubTitle>
        </BoxItem>
        <BoxItem>
          <SubTitle className="box-title">
            <Highlight>968 </Highlight>games projects
          </SubTitle>
        </BoxItem>
        <BoxItem>
          <SubTitle className="box-title">
            <Highlight>9 </Highlight>
            top video game <br />
            companies work with us
          </SubTitle>
        </BoxItem>
      </BoxWrapper>
      <TextWrapper>
        <SubTitle>99.44% of projects delivered by or before deadline</SubTitle>
        <SubText>(More than 1500 tasks delivered on time every month)</SubText>
      </TextWrapper>
    </Section>
  );
}

export default Active;
