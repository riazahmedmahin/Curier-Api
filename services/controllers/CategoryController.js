import CategoryModel from "../model/CatageryModel.js"

export const ProductCategoryList = async (req, res) => {
    try {
        let data = await CategoryModel.find();
        return res.status(200).json({ status: "Success", data: data });
    } 
    catch (e) {
        return res.json({ status: "Fail", data: e.toString() });
    }
};