const agents = require('../databases/agent.db.js');
const uuid = require('uuid');
function createAgent(agent) {
    agentToBeCreated = uuid.v4();
    agents.push(agentToBeCreated);
    return agentToBeCreated;
}

function getAllAgents() {
    return agents;
}

    function getAgentById(id) {
        return agents.find(agent => agent.id === id);
    }

function updateAgent(agent) {
    const app = agents.findIndex(agent => agent.id === agent.id);
    if (app === -1) {
        agents[app] = { ...agents [app], 
            ...agentToBeCreated };

            return agents[app];
        }
        return null;
    }

    function deleteAgent(agentId) {
        const app = agents.findIndex(agent => agent.id === id);
        if (app !== -1) {
            agents.splice(app, 1);
            return true;
        }
        return false;
    }

    module.exports = {
        createAgent,
        getAllAgents,
        updateAgent,
        deleteAgent
    };

