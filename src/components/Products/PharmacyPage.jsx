import React from 'react';
import FloraCategories from './reusable/FloraCategories';
import ProductsAdSection from './reusable/ProductsAdSection';

const PharmacyPage = () => {
    return ( 
        <div className='PharmacyPage'>
            <ProductsAdSection />
            <FloraCategories />
        </div>
);
}
 
export default PharmacyPage;