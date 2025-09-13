use client
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{
      styleVariant: 'futuristicAndOutOfBox',
      colorTemplate: 2,
      textAnimation: 'slide',
    }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay 
          logoSrc="/images/logo.svg" 
          logoWidth={100}
          logoHeight={40}
          buttonText="Start Free Trial"
          onButtonClick={() => { /* your click handler */ }}
          navItems={[
            { name: 'Hero', id: 'hero' },
            { name: 'About', id: 'about' },
            { name: 'How to Buy', id: 'how-to-buy' },
            { name: 'Tokenomics', id: 'tokenomics' },
            { name: 'Footer', id: 'footer' }
          ]} 
        />
      </div>
      <div id="hero" data-section="hero">
        <TokenBillboardHero 
          title="Launch your token today!"
          subtitle="Make an impact in the crypto space."
          contractAddress="0x..."
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>
      <div id="about" data-section="about">
        <CtaAbout 
          title="What We Offer"
          descriptions={["We provide unparalleled service.", "Join us today!"]} 
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D 
          title="How to Purchase"
          steps={[
            { title: 'Step 1', description: 'Create a wallet.', position: 'left', image: '/images/placeholder1.avif', isCenter: false },
            { title: 'Step 2', description: 'Buy your first token.', position: 'center', image: '/images/placeholder2.avif', isCenter: true },
            { title: 'Step 3', description: 'Enjoy your benefits.', position: 'right', image: '/images/placeholder3.avif', isCenter: false }
          ]} 
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <ExpandingGridTokenomics 
          title="Tokenomics"
          description="Understand the numbers behind our token."
          cardItems={[
            { id: 1, title: 'Total Supply', description: '1 million tokens' },
            { id: 2, title: 'Market Cap', description: '500,000 dollars' },
            { id: 3, title: 'Liquidity', description: '200,000 dollars' }
          ]} 
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogo 
          logoSrc="/images/logo.svg" 
          logoAlt="Brand Logo"
          logoText="Acme SaaS"
          className="footer-class"
          svgClassName="footer-svg-class"
        />
      </div>
    </SiteThemeProvider>
  );
}