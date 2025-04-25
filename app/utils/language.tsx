import { Box, Typography } from "@mui/material";

export type Locale = 'fr' | 'en' | string;

type LanguageIconProps = {
  locale?: Locale;
  withLabel?: boolean;
};

type IconProps = {
  label?: string;
  imageSrc?: string;
  withLabel?: boolean; 
}

const Icon = ({ label, imageSrc, withLabel }: IconProps) => {
  console.info({ withLabel });

  return (
    <Box sx={{ display: 'flex' }}>
      <img
        src={imageSrc}
        width={20}
        height={10}
        alt={label}
      />
      { withLabel && (<Typography sx={{ fontWeight: 'bold', fontSize: 12, px: 1 }}>{ label }</Typography>) }
    </Box>
  )
}

const LanguageIcon = (props: LanguageIconProps) => {
  const {
    locale,
    withLabel,
  } = props;

  return (
    <>
      { locale === 'fr' &&  (
        <Icon
          imageSrc="/images/langues/france.jpg"
          withLabel={withLabel}
          label={locale}
        />
      )}
      { locale === 'en' && (
        <Icon
          imageSrc="/images/langues/uk.png"
          withLabel={withLabel}
          label={locale}
        />
      )}
    </>
  )
};

export default LanguageIcon;