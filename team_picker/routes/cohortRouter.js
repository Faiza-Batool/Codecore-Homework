const express = require('express');
const knex = require('../db/client');
const teamPicker = require('../teamPicker')
const router = express.Router();

//loop in cohorts
router.get('/', (req, res) => {
    knex('cohorts')
    .orderBy("createdAt", "desc") //recent one will be at top
    .then(cohorts => {
        console.log(cohorts);
        res.render("cohorts/cohorts", {list: cohorts}); 
    })
})

//getting data in new page 
router.get('/new', (req, res) => {
    res.render('cohorts/new',{
       
    })
})

//submiting form in new page

router.post('/',(req,res)=>{
     const cohort = {
         title:  req.body.name || "",
         imageUrl: req.body.url,
         content: req.body.members
    }
    //console.log(cohort)
    knex('cohorts').insert(cohort).returning("*")
    .then(data => {
        res.redirect(`/cohorts/${data[0].id}`)
        //console.log(data)
    })
})

//showing specific cohort (show page)

router.get('/:id',(req,res) => {
    const id = req.params.id
    console.log(id)
    knex('cohorts').where('id',id).first()
    .then(data => {
        res.render('cohorts/show_cohort',{cohort:data}) 
    }) 
})

// redirect to edit page

router.get('/:id/edit',(req,res) => {
    const id = req.params.id
    knex('cohorts').where('id',id).first()
    .then(data => {
        res.render('cohorts/edit',{cohort:data}) 
    }) 
})

// updating in for edit 

router.patch('/:id',(req,res) => {
    const id = req.params.id
    console.log(id)
    knex('cohorts').where('id',id).update({
        title:  req.body.name,
        imageUrl: req.body.url,
        content: req.body.members
   })
    .then(data => {
        res.redirect('/cohorts') 
    })
}) 

// delete specific id 

router.delete('/:id',(req,res) => {
    const id = req.params.id
    knex('cohorts').where('id',id).del()
    .then(() => {
        res.redirect('/cohorts') 
    }) 
})

// this will show assign_team page after giving this button link in show_cohort page

router.get('/:id/assign_team',(req,res) => {
    const id = req.params.id
    console.log(id)
    
    let team = req.query['team_method']  //radiobuttn
    let quantity = req.query['quantity'] // quantity = 3
    console.log(team)
    knex('cohorts').select('id')
    .then(data => {
        let new_length = data.length  // length= 8  
        console.log(new_length/quantity)
        // switch(team) {
        //     case 'TeamCount':    //3 teams
        //         let remain =  new_length % quantity; // 2 
        //         let div = new length/quantity; //2
                     
        //     break;
            
        //     case 'numPerTeam':    //3 people
        //         let remaining =  new_length % quantity; // 2 
        //         let div = new length/quantity; //2
        //         let no_of_teams = parseInt(div)+ 1;  //3
                
        //         for(i = 0;i<no_of_teams;i++){
        //             arr2.push([data[i]]) 
        //         }
        //         break;
        //         default:
        //       // code block
        // }
    //    alert(team)
    //     // res.render('cohorts/assign_team',{cohort:data}) 
    })
    knex('cohorts').where('id',id).first()
    .then(data => {
        res.render('cohorts/assign_team',{cohort:data}) 
    }) 
})

module.exports = router;