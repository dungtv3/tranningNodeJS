const Employee = require('./../models/Employee');


const EmployeeRoute = (router, middleware) => {

    router.get('/emplyee', middleware, (req,res) => {
      Employee.find((err,employ) => {
        if(err){
          return res.status(500).send(err);
        }
        return res.status(200).json(employ);
      })
    });

    router.post('/emplyee',middleware, (req, res,next) => {
      const EmployeeReq = new Employee(req.body);
      EmployeeReq.save(err => {
        if(err) {
          return res.status(500).json({
            status : false,
            massage : 'Failed success'
          });
        }
        return res.status(200).json({
          status : true,
          massage : 'Create success'
        });
      })
    });

    router.put('/employee/edit/:id',middleware, (req,res) => {
      Employee.findByIdAndUpdate(
        req.params.id,
        req.body,
        (err, employ) => {
          if(err) {
            return res.status(500).json({
              status : false
            });
          }
          return res.json(employ);
        }
      )
    });

    router.delete("/employee/delete/:id",middleware, (req,res) => {
        Employee.findByIdAndRemove(req.params.id, (err,todo) => {
          if(err) {
            return res.status(500).json({
              status : false
            })
          }
          return res.status(200).json({
            status : true,
            message : 'Delete Success'
          })
        })
    });
}

module.exports = EmployeeRoute;
