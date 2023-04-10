const Country = require("../model/Country");
const { countryValidation } = require("../validation");

async function addCountry(req,res)
{
    let path = `public/countryLogo/${req.file.originalname}`;
    try{
        const country = new Country({
            name: req.body.name,
            logo: path,
        })
        await country.save();
        res.send({
            message: "Country Add successfuly",
            statusCode: 200,
            data: country
        })
    } catch (error) {
        res.status(400).send(error);
    }
}

//countryList
async function countryList(req,res)
{
    try{
        const country = await Country.find();
        if(country.length > 0)
        {
            res.send({
                message : "All Country List",
                statusCode : 200,
                data: country
            })
        }else{
            res.status(400).json({
                message: "No Country Found",
                statusCode: 400
            })
        }
    }catch (error) {
        res.json({ message: error });
    }
}

async function countryDetails(req,res)
{
    try{
        const country = await Country.findById(req.params.countryId);
        if(country != "")
        {
            res.send({
                message: "Country Details",
                statusCode: 200,
                data: country
            })
        }else{
            res.status(400).json({
                message: "country is not found",
                statusCode: 400
            })
        }
    } catch (error) {
        res.status(400).json({
            message: "country is not found",
            statusCode: 400
        })
    }
}

async function countryUpdate(req,res)
{
    try{
        let path = `public/countryLogo/${req.file.originalname}`;
        const country = {
            name: req.body.name,
            logo: path
        }
        const updatecountry = await Country.findByIdAndUpdate(     
            { _id: req.params.countryId },
            country,
            { new : true}            
        )
        updatecountry.save();
        res.send({
            message: "country update successfully",
            statusCode: 200,
            data: updatecountry
        })
    } catch(error){
        res.json({message:error})
        // res.status(400).json({
        //     message: "country id is not found",
        //     statusCode: 400,
        // })
    }
}

async function countryDelete(req,res)
{
    try{
        const country = await Country.findByIdAndDelete(req.params.countryId);
        res.send({
            message: "Country Delete Successfully",
            statusCode: 200,           
        })
    } catch (error)
    {
        res.status(404).json({ 
            message: "Enter Country Id is not found",
            statusCode : 404 
        });
    }
}
module.exports = { addCountry, countryList, countryDetails, countryUpdate, countryDelete }