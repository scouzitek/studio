'use client';

import { ProductType } from "@/app/page";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import Features from "./features";
import MoreFeatures from "./more-features";
import Pricing from "./pricing";
import Faq from "./faq";

interface ProductContentProps {
    activeProduct: ProductType;
    onContactClick: () => void;
}

export default function ProductContent({ activeProduct, onContactClick }: ProductContentProps) {
    const { language } = useLanguage();
    const t = translations[language][activeProduct];

    return (
        <div id="product-content">
            <Features 
                mainTitle={t.features.mainTitle}
                mainDescription={t.features.mainDescription}
                featureList={t.features.featureList}
            />
            <MoreFeatures 
                mainTitle={t.moreFeatures.mainTitle}
                mainDescription={t.moreFeatures.mainDescription}
                featureList={t.moreFeatures.featureList}
            />
            <Pricing
                mainTitle={t.pricing.mainTitle}
                mainDescription={t.pricing.mainDescription}
                pricingTiers={t.pricing.pricingTiers}
                onContactClick={onContactClick}
            />
            <Faq
                mainTitle={t.faq.mainTitle}
                mainDescription={t.faq.mainDescription}
                questions={t.faq.questions}
            />
        </div>
    )
}
