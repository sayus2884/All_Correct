import { AboutTitle, AboutWrapper, TextContainer } from "./AboutTeam.styles";

function AboutTeam() {
  return (
    <AboutWrapper>
      {/* Trying to think about reducing the number of components and styles we have to create,
      Try to think about your components and see if you can make them as generic as possible so that you can use them in many places.
      This isn't so much a component as it is an element on the page- there's no reason to have this in a separate component file other than
      to just make your files smaller, which isn't a great reason to break it apart. What you should try to do here and in as many
      other places as you can find is to identify what pieces of this can be re-used, and then construct your page from those re-usable pieces.
      In this case, I see that <AboutTitle> as the same styles as the title on the blog page, the join us page, portfolio, main page, etc. So I might
      crete a component for <PageTitle> and then use that on each page. That way, you don't have to copy/paste the styles for the title into so many
      different files, and if the styles ever change, it's very easy to update it everywhere. Try going through all of your components in `src/components`
      and really examine them to determine if they can be re-used. If they can't- they shouldn't be components.*/}
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
