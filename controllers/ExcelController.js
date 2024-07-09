const excel = require('../models/excel');


const getItems = async (req, res) => {
    try {
        const response = await excel.find({});
        console.log('hiiiii')
        const arr = response.map(o => o.product_name);
        const arr1 = arr;
        res.status(200).send(arr1);
    }
    catch (e) {
        console.error(e);
    }
}


const getData = async (req, res) => {
    try {
        console.log('boddd ', req.body);
        const { products } = req.body;
        console.log("prodsss",products);

        // Fetch data from the database
        const response = await excel.find({ product_name: products});
        console.log('ress ', response);

        // Structure the response
        const structuredResponse = response.map(product => {
            const sreData = product.info.filter(item => (item.solvedBy === 'SRE'));
            const nonSreData = product.info.filter(item => item.solvedBy !== 'SRE');

            return {
                product_name: product.product_name,
                info: {
                    sre: sreData,
                    non_sre: nonSreData
                }
            };
        });

        // Send the structured response
        res.status(200).json(structuredResponse);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
}

module.exports = { getData, getItems };