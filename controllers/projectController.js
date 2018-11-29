const Project = require('../models/projectModel');

exports.create = (request, response) => {
    let project = new Project({
        projectName: request.body.projectName,
        projectDescription: request.body.projectDescription,
        projectAddress: {
            Street: request.body.projectAddress.Street,
            City: request.body.projectAddress.City,
            Code: request.body.projectAddress.Code
        },
        projectIsActive: request.body.projectIsActive
    });
    console.log(project)
    project.save(() => {
        response.send('Record successfully created.');
    });
}

exports.get = (request, response) => {
    Project.find((error, projects) => {
        response.send(projects);
    })
}

exports.read = (request, response) => {
    Project.findById(request.query.id, (error, resp) => {
        if (error) {
            return response.send(resp + ' : ' + ' Record nor found.');
        }
        response.send(resp);
    })
}

exports.delete = (request, response) => {
    Project.findByIdAndDelete(request.query.id, (error, resp) => {
        if (error) {
            return response.send(error);
        }
        response.send(resp + ' : ' + ' Record successfully deleted.');
    })
}

exports.update = (request, response) => {
    Project.findByIdAndUpdate(request.query.id, { $set: request.body }, (error, resp) => {
        if (error) {
            return response.send(' Record not found.');
        }
        response.send(resp + ' : ' + ' Record successfully updated.');
    })
}