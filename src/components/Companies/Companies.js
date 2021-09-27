import { Container, Title, CompanyList, Company } from "./Companies.styles";

function Companies({ children }) {

  const companies = [
    
  ]

  return (
    <Container>
      <CompanyList>

        <Company>
          <Title>
          These companies work with us
          </Title>
        </Company>
        <Company/>
        <Company/>
        <Company/>
        <Company/>
        <Company/>
        <Company/>
        <Company/>
        <Company/>
      </CompanyList>
    </Container>
  )
}

export default Companies;
