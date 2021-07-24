/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/medrite-logo.png';

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      <Image
        src={logo}
        sx={{ display: 'flex', width: 195, height: 70 }}
        alt="medrite md logo"
      />
    </Link>
  );
}
