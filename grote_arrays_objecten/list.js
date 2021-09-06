const countries = [
  { name: "Congo, The Democratic Republic of the", code: "CD" },
  { name: "Comoros", code: "KM" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "American Samoa", code: "AS" },
  { name: "Andorra", code: "AD" },
  { name: "Angola", code: "AO" },
  { name: "Anguilla", code: "AI" },
  { name: "Antarctica", code: "AQ" },
  { name: "Antigua and Barbuda", code: "AG" },
  { name: "Argentina", code: "AR" },
  { name: "Armenia", code: "AM" },
  { name: "Aruba", code: "AW" },
  { name: "Australia", code: "AU" },
  { name: "Austria", code: "AT" },
  { name: "Azerbaijan", code: "AZ" },
  { name: "Bahamas", code: "BS" },
  { name: "Bahrain", code: "BH" },
  { name: "Bangladesh", code: "BD" },
  { name: "Barbados", code: "BB" },
  { name: "Belarus", code: "BY" },
  { name: "Belgium", code: "BE" },
  { name: "Belize", code: "BZ" },
  { name: "Benin", code: "BJ" },
  { name: "Bermuda", code: "BM" },
  { name: "Bhutan", code: "BT" },
  { name: "Bolivia", code: "BO" },
  { name: "Bosnia and Herzegovina", code: "BA" },
  { name: "Botswana", code: "BW" },
  { name: "Bouvet Island", code: "BV" },
  { name: "Brazil", code: "BR" },
  { name: "British Indian Ocean Territory", code: "IO" },
  { name: "Brunei Darussalam", code: "BN" },
  { name: "Bulgaria", code: "BG" },
  { name: "Burkina Faso", code: "BF" },
  { name: "Burundi", code: "BI" },
  { name: "Cambodia", code: "KH" },
  { name: "Cameroon", code: "CM" },
  { name: "Canada", code: "CA" },
  { name: "Cape Verde", code: "CV" },
  { name: "Cayman Islands", code: "KY" },
  { name: "Central African Republic", code: "CF" },
  { name: "Chad", code: "TD" },
  { name: "Chile", code: "CL" },
  { name: "China", code: "CN" },
  { name: "Christmas Island", code: "CX" },
  { name: "Cocos (Keeling) Islands", code: "CC" },
  { name: "Colombia", code: "CO" },
  { name: "Congo", code: "CG" },
];

const mensen = [
  {
    name: "Freek",
    lastname: "Breedeman",
    gender: "m",
    dob: "2015-01-24",
    pic: "https://st3.https://thispersondoesnotexist.com/.com/9881890/13396/i/600/depositphotos_133960224-stock-photo-smiling-young-man.jpg",
  },
  {
    name: "Lex",
    lastname: "naro",
    gender: "m",
    dob: "2015-01-27",
    pic: "https://images0.persgroep.net/rcs/K-CUnBpvu_bQDb2GyeUHCBzrL_Y/diocontent/206960568/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8",
  },
  {
    name: "hendrik",
    lastname: "jansberg",
    gender: "m",
    dob: "2019-01-24",
    pic: "https://media.indebuurt.nl/deventer/2019/01/15143048/alan-jahya.jpg",
  },
  {
    name: "Dennis",
    lastname: "franssen",
    gender: "m",
    dob: "1900-01-24",
    pic: "https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg",
  },
  {
    name: "lon",
    lastname: "Farah",
    gender: "m",
    dob: "1922-01-24",
    pic: "https://img.24baby.nl/2021/01/b5b79efa-vruchtbaarheid-man.jpg",
  },
  {
    name: "don",
    lastname: "der Op",
    gender: "m",
    dob: "1980-01-24",
    pic: "https://images.nrc.nl/4boZf6f4blwbp_Y-pGsmIVeBRAk=/1280x/filters:no_upscale():format(jpeg):fill(f8f8f8,true)/s3/static.nrc.nl/bvhw/wp-content/blogs.dir/114/files/2019/01/tiggelaar-ben-online-artikel.png",
  },
  {
    name: "gon",
    lastname: "Sofar",
    gender: "m",
    dob: "1992-01-24",
    pic: "https://rutgerdijkstra.com/wp-content/uploads/RUTGER_DIJKSTRA.png",
  },
  {
    name: "Free",
    lastname: "wilhie",
    gender: "m",
    dob: "2014-01-24",
    pic: "https://www.marksprenger.com/wp-content/uploads/mark-sprenger.jpg",
  },
  {
    name: "hen",
    lastname: "henssen",
    gender: "m",
    dob: "2011-01-24",
    pic: "https://img.freepik.com/vrije-photo/medium-shot-senior-man-met-gekruiste-armen_23-2148783570.jpg?size=626&ext=jpg",
  },
  {
    name: "jan",
    lastname: "janssen",
    gender: "m",
    dob: "2015-01-24",
    pic: "https://media.istockphoto.com/photos/elderly-woman-with-her-arms-crossed-picture-id875284370",
  },
  {
    name: "francien",
    lastname: "lexxen",
    gender: "f",
    dob: "2015-01-27",
    pic: "https://media.istockphoto.com/photos/elderly-woman-with-her-arms-crossed-picture-id875284370",
  },
  {
    name: "Henriette",
    lastname: "Verstappen",
    gender: "f",
    dob: "1988-03-24",
    pic: "https://media.istockphoto.com/photos/elderly-woman-with-her-arms-crossed-picture-id875284370",
  },
  {
    name: "pascal",
    lastname: "de vrouw",
    gender: "f",
    dob: "1900-01-24",
    pic: "https://media.istockphoto.com/photos/elderly-woman-with-her-arms-crossed-picture-id875284370",
  },
  {
    name: "lonny",
    lastname: "Farah",
    gender: "f",
    dob: "1922-01-19",
    pic: "https://media.istockphoto.com/photos/elderly-woman-with-her-arms-crossed-picture-id875284370",
  },
  {
    name: "henriette",
    lastname: "honny",
    gender: "f",
    dob: "1980-01-16",
    pic: "https://media.istockphoto.com/photos/elderly-woman-with-her-arms-crossed-picture-id875284370",
  },
  {
    name: "kong weng weng",
    lastname: "Farah",
    gender: "f",
    dob: "1992-01-24",
    pic: "https://media.istockphoto.com/photos/elderly-woman-with-her-arms-crossed-picture-id875284370",
  },
  {
    name: "josje",
    lastname: "bonny",
    gender: "f",
    dob: "1989-12-24",
    pic: "https://media.istockphoto.com/photos/elderly-woman-with-her-arms-crossed-picture-id875284370",
  },
  {
    name: "tonnie",
    lastname: "tonny",
    gender: "f",
    dob: "2011-12-29",
    pic: "https://media.istockphoto.com/photos/elderly-woman-with-her-arms-crossed-picture-id875284370",
  },
];
