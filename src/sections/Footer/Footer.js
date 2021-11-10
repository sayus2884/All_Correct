import Image from "next-optimized-images";
import facebookLogo from "../../../public/images/logos/facebook.svg";
import linkedinLogo from "../../../public/images/logos/linkedin.svg";
import mediumLogo from "../../../public/images/logos/medium.svg";
import rssLogo from "../../../public/images/logos/rss.svg";
import {
  AddressWrapper,
  Copyright,
  FooterWrapper,
  SocialItem,
  SocialWrapper,
  Wrapper,
} from "./Footer.styles";
import Link from "../../components/Link/Link.js";
import Nav from "../Nav/Nav.js";

const Footer = () => {
  return (
    <FooterWrapper>
      <Nav inherit={true} footer={true} />
      <Wrapper>
        <Wrapper className="grid">
          <AddressWrapper>
            <p>
              <span>IRELAND:</span> 66 Silken Vale, Maynooth, co. Kildare, Ireland W23 V3P2
            </p>
            <p>
              <span>CANADA:</span> 119 Spadina Ave, Toronto, ON M6E3J3
            </p>
          </AddressWrapper>

          <Copyright>
            <p>
              © Allcorrect Group 2006—2021,&nbsp;
              <Link
                href="https://allcorrectgames.com/legal-information/"
                target="_blank"
                rel="noopener">
                «Legal information»
              </Link>
            </p>
            <p>site@allcorrectgames.com</p>
          </Copyright>
        </Wrapper>

        <SocialWrapper>
          <SocialItem>
            <Image src={facebookLogo} layout="fixed" width={18} height={20} />
            <Link
              href="https://www.facebook.com/allcorrectgames?ref=aymt_homepage_panel"
              target="_blank"
              rel="noopener">
              Facebook
            </Link>
          </SocialItem>
          <SocialItem>
            <Image src={linkedinLogo} layout="fixed" width={18} height={20} />
            <Link href="https://medium.com/@allcorrect" target="_blank" rel="noopener">
              Linkedin
            </Link>
          </SocialItem>
          <SocialItem>
            <Image src={mediumLogo} layout="fixed" width={18} height={20} />
            <Link
              href="https://www.linkedin.com/company/allcorrectgames/"
              target="_blank"
              rel="noopener">
              Medium
            </Link>
          </SocialItem>
          <SocialItem>
            <Image src={rssLogo} layout="fixed" width={18} height={20} />
            <Link
              href="http://feeds.feedburner.com/allcorrectgamescominsights"
              target="_blank"
              rel="noopener">
              RSS
            </Link>
          </SocialItem>
        </SocialWrapper>
      </Wrapper>
    </FooterWrapper>
  );
};

export default Footer;
