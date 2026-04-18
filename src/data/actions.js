
const recon ={
    id: "action_red_recon",
    name: "reconaissance",
    team: "red",
    cost: 1,
    description: "using a basic NMap command, you search for vulnerable ports in your rival's servers",
    effect: {
        type: "info",
        value: 10
    }
}

const monitor ={
    id: "action_blue_monitor",
    name: "monitoring",
    team: "blue",
    cost: 1,
    description: "Using Nagios, you are able to spot one open port in your server and manage to close it",
    effect: {
        type: "reduction",
        value: 5
    }
}

export const actions = [recon, monitor]