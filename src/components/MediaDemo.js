import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { Galleria } from 'primereact/galleria';
import ProductService from '../service/ProductService';
import PhotoService from '../service/PhotoService';

export const MediaDemo = () => {
    const [products, setProducts] = useState([]);
    const [images, setImages] = useState([]);

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    useEffect(() => {
        const productService = new ProductService();
        const photoService = new PhotoService();
        productService.getProductsSmall().then(data => setProducts(data.slice(0, 10)));
        photoService.getPhotos().then(data => setImages(data));
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="product-item">
                <div className="product-item-content">
                    <div className="p-mb-3">
                        <img src={`assets/demo/images/product/${product.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={product.name} className="product-image" />
                    </div>
                    <div>
                        <h4 className="p-mb-1">{product.name}</h4>
                        <h6 className="p-mt-0 p-mb-3">${product.price}</h6>
                        <span className={`product-badge status-${product.inventoryStatus.toLowerCase()}`}>{product.inventoryStatus}</span>
                        <div className="car-buttons p-mt-5">
                            <Button icon="pi pi-search" className="p-button p-button-rounded p-mr-2" />
                            <Button icon="pi pi-star" className="p-button-success p-button-rounded p-mr-2" />
                            <Button icon="pi pi-cog" className="p-button-help p-button-rounded" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }


    const itemTemplate = (item) => {
        return <img src={'assets/' + item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={'assets/' + item.thumbnailImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    return (
        <div className="p-grid p-fluid carousel-demo">
            <div className="p-col-12">
                <div className="card">
                    <h5>Carousel</h5>
                    <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions}
                        itemTemplate={productTemplate} />
                </div>
            </div>
            <div className="p-col-12">
                <div className="card">
                    <h5>Galleria</h5>
                    <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={7} style={{ maxWidth: '800px', margin: 'auto' }}
                        item={itemTemplate} thumbnail={thumbnailTemplate} />
                </div>
            </div>
        </div>
    )
}