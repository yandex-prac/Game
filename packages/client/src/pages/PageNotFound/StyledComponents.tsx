import styled from 'styled-components'
import v from '../../Variables.module.scss'
import { Link } from 'react-router-dom'

const Page = styled.div`
  text-align: center;
`

const Img = styled.img`
  width: 130px;
  height: 195px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 30px;
`

const Title = styled.h1`
  margin: 0 0 20px 0;
  font-size: 40px;
  color: ${v.$black000};
  font-weight: 500;
  line-height: 40px;
`

const SubTitle = styled.p`
  margin: 0 0 70px 0;
  font-size: 20px;
  color: ${v.$black000};
  font-weight: 500;
  line-height: 20px;
`

const LinkWrap = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  color: ${v.blue000};
  font-weight: 500;
  line-height: 11px;
  transition: 0.3s opacity;

  &:hover {
    opacity: 0.7;
  }
`

export { Page, Img, Title, SubTitle, LinkWrap }
