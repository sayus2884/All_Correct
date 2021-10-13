import { AboutTitle, AboutWrapper, TextContainer } from "./AboutTeam.styles";

function AboutTeam() {
  return (
    <AboutWrapper>
      <AboutTitle>About the Allcorrect team</AboutTitle>
      <TextContainer>
        <p>
          We've been working on interesting projects, including AAA titles and indie games, since
          2008. And we'd be happy to build a long-term partnership with professionals.
        </p>

        <ul>
          Our team includes more than 1,500 specialists:
          <li>- Translators in 40 language pairs who specialize in localizing video games. </li>
          <li>- Enthusiastic 2D and 3D game artists. </li>
          <li>- Testers and other passionate game industry specialists.</li>
        </ul>

        <p>
          Join our team if you want to work on projects for famous game developers and publishers!
        </p>
      </TextContainer>
    </AboutWrapper>
  );
}

export default AboutTeam;
