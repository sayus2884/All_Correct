import { Container, SubTitle, CompanyList, CompanyItem, Image } from "./Companies.styles";
import Company from "../../components/Company/Company.js";
import Section from "../../components/Section/Section.js";

function Companies({ children }) {
  const companies = [
    { alt: "ea", src: "/images/companies/ea.png", url: "https://www.ea.com" },
    { alt: "ubisoft", src: "/images/companies/ubisoft.png", url: "https://www.ubisoft.com/en-us/" },
    { alt: "bandai", src: "/images/companies/bandai.png", url: "https://www.bandai.com/" },
    { alt: "daedalic", src: "/images/companies/daedalic.png", url: "https://www.daedalic.com/" },
    { alt: "fatshark", src: "/images/companies/fatshark.png", url: "https://www.fatshark.se/" },
    { alt: "yoozoo", src: "/images/companies/yoozoo.png", url: "https://global.yoozoo.com/" },
    { alt: "gaijin", src: "/images/companies/gaijin.png", url: "https://gaijin.net/en" },
    {
      alt: "starstable",
      src: "/images/companies/starstable.png",
      url: "https://www.starstable.com/en/",
    },
  ];

  return (
    <Section>
      <SubTitle className="mobile">These companies work with us</SubTitle>

      <CompanyList>
        <CompanyItem className="mobile">
          <SubTitle className="tablet">These companies work with us</SubTitle>
        </CompanyItem>

        {companies.map(({ url, src, alt }, i) => (
          <Company key={i} url={url} src={src} alt={alt} />
        ))}
      </CompanyList>
    </Section>
  );
}

export default Companies;
