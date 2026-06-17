import {
defineCollection,
z
}
from "astro:content";

const writing =
defineCollection({

schema:
z.object({

title:
z.string(),

description:
z.string(),

tags:
z.array(
z.string()
),

date:
z.coerce.date()

})

});

export const collections = {

writing

};