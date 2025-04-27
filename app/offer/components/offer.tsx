import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useIntl } from "react-intl";
import OfferPresentation from "./offer-presentation";
import LayoutWrapper from "@/app/layout-wrapper";
import OfferPresentationSm from "./offer-presentation-sm";
import { useMemo } from "react";
import OfferItemSm from "./offer-item-sm";
import shadows from "@mui/material/styles/shadows";

export type OfferItem = {
  label: string;
  description?: string; 
};

export type Offer = {
  title: string;
  offerItems: OfferItem[];
};

export const offersList: Offer[] = [
  {
    title: "offer.title.webCreation",
    offerItems: [
      {
        label: "offer.webCreation.label.facadeWeb",
        description: "offer.webCreation.description.facadeWeb"
      },
      {
        label: "offer.webCreation.label.entrepriseWeb",
        description: "offer.webCreation.description.entrepriseWeb"
      },
      {
        label: "offer.webCreation.label.ecommerce",
        description: "offer.webCreation.description.ecommerce"
      }
    ]
  },
  {
    title: "offer.title.mobileApp",
    offerItems: [
      {
        label: "offer.mobileApp.label.entrepriseApp",
        description: "offer.mobileApp.description.connectedApp"
      },
      {
        label: "offer.mobileApp.label.connectedApp",
        description: "offer.mobileApp.description.connectedApp"
      },
      {
        label: "offer.mobileApp.label.nativeApp",
        description: "offer.mobileApp.description.nativeApp"
      }
    ]
  },
  {
    title: "offer.title.devOpsAndOther",
    offerItems: [
      {
        label: "offer.devOpsAndOther.label.devops",
        description: "offer.devOpsAndOther.description.devops"
      },
      {
        label: "offer.devOpsAndOther.label.bddManagement",
        description: "offer.devOpsAndOther.description.bddManagement"
      },
      {
        label: "offer.devOpsAndOther.label.performanceOptimization",
        description: "offer.devOpsAndOther.description.performanceOptimization"
      },
      {
        label: "offer.devOpsAndOther.label.containerized",
      },
      {
        label: "offer.devOpsAndOther.label.migration",
      },
    ]
  },
];

const Offer = () => {
  const intl = useIntl();
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('md'));

  const offerItemsComponent = useMemo(() => {
    if (isSm) {
      return offersList.map((offer: Offer) => (
        <Box sx={{ m: 2 }}><OfferItemSm offer={offer} /></Box>
      ));
    }

    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          ' div': {
            width: '30%',
          }
        }}
      >
        {
          offersList.map((offer: Offer) => {
            return (
              <OfferItemSm offer={offer} />
            );
          })
        }
      </Box>
    );
  }, []);

  return (
    <LayoutWrapper>
      <Box sx={{ mb: 5 }}>
        { isSm ? <OfferPresentationSm /> : <OfferPresentation /> }
        { offerItemsComponent }
      </Box>
    </LayoutWrapper>
  );
};

export default Offer;