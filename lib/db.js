const { DB_USER, DB_PASS } = process.env;

export const connectionStr = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.tryvron.mongodb.net/TrendyBrand?retryWrites=true&w=majority`;
