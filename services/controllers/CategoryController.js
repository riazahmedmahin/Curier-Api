import CategoryModel from "../model/CatageryModel.js"



export const createCategory = async (req, res) => {
    try {
        const { categoryname, categoryImg } = req.body;

        // Check if the required fields are provided
        if (!categoryname || !categoryImg) {
            return res.status(400).json({ status: "Fail", message: "Category name and image are required" });
        }

        // Check if the category already exists
        const existingCategory = await CategoryModel.findOne({ categoryname });
        if (existingCategory) {
            return res.status(400).json({ status: "Fail", message: "Category already exists" });
        }

        // Create a new category
        const newCategory = new CategoryModel({ categoryname, categoryImg });
        await newCategory.save();

        return res.status(201).json({ status: "Success", data: newCategory });
    } catch (e) {
        return res.status(500).json({ status: "Fail", message: e.toString() });
    }
};

export const ProductCategoryList = async (req, res) => {
    try {
        let data = await CategoryModel.find();
        return res.status(200).json({ status: "Success", data: data });
    } 
    catch (e) {
        return res.json({ status: "Fail", data: e.toString() });
    }
};