const BASE_URL = "https://masterappliancetech.vercel.app/"

export const getData = async () => {
    const res = await fetch(`${BASE_URL}json/masterapplienceNews.json`);
    if (!res.ok) {
        throw new Error("Failed to fetch data");

    };
    return res.json();
};


export const getBlogView = async (id) => {
    let item = await getData();

    if (!Array.isArray(item)) {
        item = item.items || [];
    }

    const singleItem = item.find(blog => blog?.id === id);
    console.log(singleItem);
    return singleItem;
};


const getServiceData = async () => {
    try {
        const res = await fetch(`${BASE_URL}corporateservicestaqwaint.json`);
        if (!res.ok) {
            throw new Error("Failed to fetch datas");
        }
        return res.json();
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

export const getCorporateServiceDetail = async (id) => {
    let item = await getServiceData();

    if (!Array.isArray(item)) {
        item = item.items || [];
    }

    const corporateServiceDetail = item.find(serviceDetail => serviceDetail?.id === id);
    return corporateServiceDetail;
};



