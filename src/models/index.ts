import { useApi } from '../hooks/useApi'
import { Ref, ref } from 'vue'
export interface Index {
    id: string;
    title: string;
    category: string;
    description: string;
    images: string[];
    variants: Variants[];
    price: string;
    tags: Tag[];
}
export enum Tag {
    Awesome = "Awesome",
    Ergonomic = "Ergonomic",
    Fantastic = "Fantastic",
    Generic = "Generic",
    Gorgeous = "Gorgeous",
    Handcrafter = "Handcrafter",
    Handmade = "Handmade",
    Incredible = "Incredible",
    Intelligent = "Intelligent",
    Licensed = "Licensed",
    Practical = "Practical",
    Refined = "Refined",
    Rustic = "Rustic",
    Sleek = "Sleek",
    Small = "Small",
    Tasty = "Tasty",
    Unbranded = "Unbranded"
}
export interface Variants {
    id: string;
    quantity: number;
    title: string;
    sku: string;
}
// export enum Title {
//     Concrete = "Concrete",
//     Cotton = "Cotton",
//     Fresh = "Fresh",
//     Frozen = "Frozen",
//     Granite = "Granite",
//     Metal = "Metal",
//     Plastic = "Plastic",
//     Rubber = "Rubber",
//     Soft = "Soft",
//     Steel = "Steel",
//     Wooden = "Wooden"
// }

export type UsableProducts = Promise<{ products: Ref<Index[] | undefined> }>;

async function useIndex(): UsableProducts {
    const { response: products, request } = useApi<Index[]>('http://ecomm-products.modus.workers.dev');
    const loaded = ref(false)
    if (loaded.value === false) {
        await request();
        loaded.value = true;
    }
    return { products };
}
export { useIndex }
export default useIndex