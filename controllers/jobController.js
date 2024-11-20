class jobController {
    static post = async (req, res) => {
      try {
        res.send(req.body)
      } catch (err) {
        console.log(err.message);
      }
    };
  
    static get = async (req, res) => {
      res.send("hello from the get");
    };
    static getAdminJob = async (req, res) => {
      res.send("hello from the adminjb");
    };
    static getJobId = async (req, res) => {
      res.send("hello from the id job");
    };
  }
  
  export default jobController;