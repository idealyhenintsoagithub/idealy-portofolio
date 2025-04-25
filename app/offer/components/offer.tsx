import { Box } from "@mui/material";
import { useIntl } from "react-intl";
import OfferItemComponent from "./offer-item";
import Grid from "@mui/material/Grid";
import OfferPresentation from "./offer-presentation";
import LayoutWrapper from "@/app/layout-wrapper";

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

  const offerItemsComponent = offersList.map((offer: Offer) => {
    return (
      <OfferItemComponent offer={offer} />
    )
  });

  return (
    <LayoutWrapper>
      <OfferPresentation />
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        {offerItemsComponent}
      </Grid>
    </LayoutWrapper>
  );
};

export default Offer;