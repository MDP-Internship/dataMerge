
import People from '../model/people'

export default class IrregularServices {

    static peopleAdd(body) {

            const peopleAdd = People({
                id: body.id,
                mail: body.mail,
                adress: body.adress,
                name: body.name,
                username: body.username,
            });

            peopleAdd
                .save()
                .then((data) => {
                    res.json(data);
                })
                .catch((err) => {
                    res.json({ mesaage: err });
                });


        }

        // console.log(body);



    };

