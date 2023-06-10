---
title: Reinforcement Learning Lecture Notes
summary: Lectures notes from David Silver's Reinforcement Learning Course
created: 2023-05-21
tags: ['Reinforcement Learning']
toc: true
---

# Reinforcement Learning Course Notes: David Silver's Course

# Lecture 1: Introduction to RL

Created: May 6, 2023 9:27 PM

### Branches of Machine learning:

- Supervised Learning
- Unsupervised Learning
- Reinforcement Learning

### Rewards:

- A reward is a scalar feedback signal
- Agent’s job is to maximize cumulative reward

### Reward Hypothesis:

- All goals cam be described by the maximization of expected cumulative reward

### Sequential Decision making:

- **Goal:**  Select actions to maximize total future reward
- Actions may have long term consequences
- Reward may be delayed
- It may be better to sacrifice immediate reward to gain more long-term reward

### Agent and Environment:
<script>
    // import functions
import { math, display } from 'mathlifier';
// example of using these functions
const inlineMath = math('A_{t}');
const outlineMath = math('R_{t}')
const inlineMath3 = math('O_{t}')
const displayedMath = display('x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}');
const allowBreak = math('e^{i\\pi} = -1', { wrap: true });
</script>


 - At Each step t, the agent:
    - Executes an action {@html inlineMath}
    - Receives observation {@html inlineMath3}
    - Receives scalar reward {@html outlineMath} 

- The Environment:
    - Receives action {@html inlineMath}
    - Emits observation {@html inlineMath3}
    - Emits scalar reward {@html outlineMath}

<!-- 

### History and State:

- History is sequence of observations, actions and rewards
- $H_{t} = O_{1}, R_{1}, A_{1},.... , A_{t-1}, O_{t}, R_{t}$
- All observables variables upto time $t$
- State is the information used to determine what happens next
- $S_{t} = f(H_{t})$

### Environment State:

- The environment state $S_{t}^{e}$ is environment’s private representation:
    
    i.e. whatever date the environment used to pick next observation/reward
    
- It’s not usually visible to the agent (except for POMDPs)

### Agent State:

- The agent state $S_{t}^{a}$ is agent’s internal representation
- It is the information used by RL Algorithms
    
    $S_{t}^{a} = f(H_{t})$
    

### Information State (Markov State):

- Contains all useful information from history
- **Definition:**  A state is $S_{t}$ Markov if
    
    $$
    P[S_{t+1}| S_{t}] = P[S_{t+1}| S_{1}, ... , S_{t}]
    $$

- The state is sufficient statistic of future
- $S_{t}^{e}$ is Markov
- $H_{t}$ is Markov

### Fully Observable Environments:

- Agent directly observes environment state

$$
O_{t} = S_{t}^{a} = S_{t}^{e}
$$

- Agent state = Environment state = Information state
- This is called MDP (Markov Decision Process)

### Partially Observable Environments:

- Agent indirectly observes environment
- Agent state $\neq$ Environment state
- These are POMDPs
- Agent must construct its own state representation ($S_{t}^{a}$):
    - Complete history $S_{t}^{a} = H_{t}$
    - Belief of an environment state $S_{t}^{a} = (P[S_{t}^{e} = S, ..., P[S_{t}^{e} = S^{n}])$
    - Recurrent Neural Network: $S_{t}^{a} = \sigma(S_{t-1}^{a}W_{s} + O_{t}W_{o})$

### Components of an RL Agent:

- An RL agent may include one (or) more of these components:
    - **Policy:** Agent’s behaviour function
    - **Value Function:**  How good each state/action
    - **Model:**  Agent’s representation of environment

### Policy:

- A policy is Agent’s behaviour
- map from state to action
- **Deterministic Policy:**  $a = \pi(s)$
- **Stochastic Policy:**   $\pi(a|s)= P[A_{t} = a | S_{t} = s]$ -->

### Value Function:

- Prediction of future reward
- used to evaluate the goodness/badness of state
- select between actions

<!-- $$
V_{\pi}(s) = E_{\pi}[R_{t+1} + \gamma R_{t+2} + \gamma^{2} R_{t+3} + ... | S_{t} = s]
$$ -->

### Model:

- A model predicts what environment will do next
- P predicts the next state
- R predicts the reward

### Categorizing RL Agents (1):

- **Value Function:**  No policy but value function
- **Policy Based:**  No value function but policy
- **Actor-Critic:** Both policy and value function

### Categorizing RL Agents (2):

- **Model-Free:** Policy and/or Value function
- **Model-Based:** Policy and/or Value function and Model

### RL Agent Taxonomy:


### Two fundamental problems in Sequential Decision making:

- RL :
    - The environment is initially unknown
    - The Agent interacts with environment
    - The Agent improves its policy
- Planning:
    - A model of env. is known
    - Agent performs computation with model
    - The Agent improves its policy

### Exploitation and Exploration

### Prediction and Control:

- Prediction: Evaluate the future, given a policy
- Control: Optimize the future and find the best policy