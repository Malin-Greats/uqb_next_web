import Image from 'next/image';

// material-ui
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

// mui styles
import { styled } from '@mui/material/styles';

// assets
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/Linkedin';

// assets
const footerLogo = '/assets/images/landing/footerLogo.svg';

// styles
const FooterWrapper = styled('div')(({ theme }) => ({
  color: '#fff',
  [theme.breakpoints.up('xs')]: {
    height: '100%',
  },
  [theme.breakpoints.up('md')]: {
    height: 356,
  },
  background: '#393E46',
  paddingTop: '3.5rem',
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  color: '#F4F4F4',
  [theme.breakpoints.up('xs')]: {
    width: 380,
  },
  [theme.breakpoints.up('md')]: {
    width: 420,
  },
  lineHeight: 1.5,
  margin: '2rem 0',
}));

const FooterLink = styled(Link)({
  color: '#fff',
  display: 'inline-flex',
  alignItems: 'center',
  textDecoration: 'none !important',
  opacity: '0.8',
  '& svg': {
    fontsize: '1.125rem',
    marginRight: 8
  },
  '&:hover': {
    opacity: '1'
  },
});

const FooterList = styled('ul')({
  listStyle: 'none',
  margin: '35px 0',
  padding: 0,
  '& li': {
    marginBottom: '1rem',
    '&:hover': {
      cursor: 'pointer',
    },
    '& a': {
      color: '#fff',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      }
    }
  }
});

const UpperFooterSocialWrapper = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const LowerFooterSocialWrapper = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

// footer icon size
const footerIconSize = 'large';

// ==============================|| LANDING - FOOTER PAGE ||============================== //

const FooterPage = () => {
  return (
    <FooterWrapper>
      <Container>
        <Grid container>

          {/* left side */}
          <Grid item xs={12} sm={6}>
            <Grid container>

              {/* uqb footer logo */}
              <Grid item>
                <Image src={footerLogo} alt="Unique Books" width={184} height={50} layout="intrinsic" />
              </Grid>
              {/* end of uqb footer logo */}

              {/* uqb footer description */}
              <Grid item>
                <Description>
                  Zimbabwe’s first online self publishing website.
                  We help authors share their stories with the world
                  while having full control over their work.
                </Description>
              </Grid>
              {/* end of uqb footer description */}

              {/* footer social media icons */}
              <UpperFooterSocialWrapper container>
                <Grid item>
                  <FooterLink href="" target="_blank" underline="hover">
                    <InstagramIcon fontSize={footerIconSize} />
                  </FooterLink>
                </Grid>
                <Grid item>
                  <FooterLink href="" target="_blank" underline="hover">
                    <FacebookIcon fontSize={footerIconSize} />
                  </FooterLink>
                </Grid>
                <Grid item>
                  <FooterLink href="" target="_blank" underline="hover">
                    <TwitterIcon fontSize={footerIconSize} />
                  </FooterLink>
                </Grid>
                <Grid item>
                  <FooterLink href="" target="_blank" underline="hover">
                    <LinkedInIcon fontSize={footerIconSize} />
                  </FooterLink>
                </Grid>
              </UpperFooterSocialWrapper>
              {/* end of footer social media icons */}

            </Grid>
          </Grid>
          {/* end of left side */}

          {/* right side */}
          <Grid item xs={12} sm={6}>
            <Grid container>
              {/* footer navigation */}
              <Grid sx={{ width: { xs: 180, lg: 200 } }} item>
                <Typography variant="h4" color="inherit" gutterBottom>
                  Navigate
                </Typography>
                <FooterList>
                  <li>Shop</li>
                  <li>Services</li>
                  <li>Blog</li>
                </FooterList>
              </Grid>
              <Grid sx={{ width: { xs: 180, lg: 200 } }} item>
                <Typography variant="h4" color="inherit" gutterBottom>
                  Contact Us
                </Typography>
                <FooterList>
                  <li>+263784084590</li>
                  <li>email@uniquebooks.co.zw</li>
                  <li>123 something. Surbub, City</li>
                </FooterList>
              </Grid>
              {/* end of footer navigation */}
            </Grid>
          </Grid>
          {/* end of right side*/}

          <LowerFooterSocialWrapper container>
            <Grid item>
              <FooterLink href="" target="_blank" underline="hover">
                <InstagramIcon fontSize={footerIconSize} />
              </FooterLink>
            </Grid>
            <Grid item>
              <FooterLink href="" target="_blank" underline="hover">
                <FacebookIcon fontSize={footerIconSize} />
              </FooterLink>
            </Grid>
            <Grid item>
              <FooterLink href="" target="_blank" underline="hover">
                <TwitterIcon fontSize={footerIconSize} />
              </FooterLink>
            </Grid>
            <Grid item>
              <FooterLink href="" target="_blank" underline="hover">
                <LinkedInIcon fontSize={footerIconSize} />
              </FooterLink>
            </Grid>
          </LowerFooterSocialWrapper>

        </Grid>
      </Container>
    </FooterWrapper>
  );
};

export default FooterPage;
