import  sanityClient from "@sanity/client";

export default sanityClient({
   
   projectId: "sco4kwwz",
   dataset: "production",
   apiVersion: '2021-08-31',
   useCdn: true,

})