---
title: 'Machine Learning Cousre Notes(Andrew Ng Course)' 
image: '/hello-world/urara.webp' 
created: 2021-11-01 
updated: 2021-12-12 
published: 2021-11-04 
tags: 
  - 'Machine Learning'
  - 'AndrewNg'
flags: 
  - unlisted 
---


# Machine Learning Course Notes - AndrewNg(with code implementations of Algorithms)
> My entire Machine learning course notes along with code implementations for all algorithms. The notes are based on the course taught by AndrewNg offered by stanford on Coursera.


## Introduction to Machine learning:
* Types of ML problems
* Types of ML algorithms:
  * Supervised learning
  * Unsupervised learning
  * semi supervised learning
  * Reinforcement learning
* Singular Value Decomposition method

### Definition of Machine Learning: 
Many attempts were made to define what is machine learning. Some of the prominent definitions are: 
* **Arthur Samuel(1959)** : Field of study that gives computers the ability to learn without being explicitly programmed.
* **Tom Mitchell(1998)**:   
A well-posed learning problem is defined as:  
A computer program is said to learn from experience "E" with respect to some task "T" and some performance measure "P", if its performance on T as measured by P improves with E.

Ex:  An email program detecting spam mails. In this example:   
* **Task "T":** classifying emails as spam or not
* **Experience "E":** watching you label email as spam or not spam
* **Performance "P":** Fraction of emails correctly classified.

### Types of ML Algorithms(based on learning methods): 
* **Supervised Learning:** We give the dataset which contains input data with the labelled ground truths so that the model can learn from it and when trained can produce results which are more close to the actual labels.
* **Unsupervised Learning:**   Allows us to approach problems with little or no idea what our results would look like. These learning algorithms are used to identify the patterns in dataset that has datapoints that are neither classified nor labelled.
* **Semi-supervised learning:**  is an approach to machine learning that combines a small amount of labeled data with a large amount of unlabeled data during training. Semi-supervised learning falls between unsupervised learning (with no labeled training data) and supervised learning (with only labeled training data). It is a special instance of weak supervision.
* **Reinforcement learning:** Reinforcement learning is a machine learning training method based on rewarding desired behaviors and/or punishing undesired ones. In general, a reinforcement learning agent is able to perceive and interpret its environment, take actions and learn through trial and error.

### Types of problems in supervised learning:
* **Regression problems:** These are problems where our predictions have continous value attribute.(for example: Housing price prediction given different factors as input in the dataset, here house prices are continuous value numbers)
* **Classification problems**: These problems have predictions that are discrete valued (for example: output is there 0(or)1 for binary classification)

### Types of problems in Unsupervised learning:
Given, a dataset the unsupervised learning algorithms will try to find some structure of pattern in the data. It decides that data lives in separate clusters. An example of this is **"Clustering Algorithm"**.  

Examples: 
* Like Newstories in google news are arranged in a cohesive way
* Genome identification and clustering the people based on genome.

## Regression problems (Linear Regression):
* Weights and Bias units
* Contour plots
* Key Idea
* Gradient Descent Algorithm
  * For linear regression
  * Batch Gradient Descent
  * Gradient Descent for Multi variable regression
* Cost Function and Loss function


```python
# This is code implementation of Cost function.
import numpy as np
def compute_cost(X,y,theta):
  """
  Calculates the cost function for given data

  Arguments:
  X : Input features passed in as vector or matrix(if multiple features)(use numpy)
  y : Labels or ground truth values passed in as a vector
  theta : parameters matrix for calculating the hypothesis function h.(should be passed as an array)
  
  Returns:
  The cost function for all the training examples in dataset

  """
  m = len(y)
  X = np.array([np.ones((m)), X])
  print(X.shape)
  h = theta.T * X # matrix multiplication
  C=[]
  C=h-y
  C=np.square(C)
  J=np.sum(C)/(2*m)
  return J
```


```python
# Implementation of Gradient Descent Algorithm
def gradient_descent(X,y,theta,alpha, num_iters):
  """
  Performs the gradient descent for the Data given no of iterations

  Arguments:
  X: Input array of data (for uni-variate linear reg : dim = (m,2))
  y: labels
  theta: parameters matrix (for 2 parameters : dim = (2,1))
  Note: Dimensions of H : (m,1), Dimensions of y : (m,1) (Both should be equal)
  Returns:
  Theta values after the minimization process of loss function
  """
  J_history = np.zeros(num_iters, 1)
  m = len(y)
  for iters in range(num_iters-1):
    H = np.matmul(X,theta)
    J = np.square(H-y)
    K = (X.T) * J
    K = K/m
    # Theta update step(parameter update step)

    theta = theta - ((alpha)*K)
    J_history[iters] = compute_cost(X, y, theta)
    return [theta, J_history]


```


```python
# An example code snippet illustrating the linear regression 
# Loading the dataset and preparing the data for the model training
import pandas as pd
df = pd.read_csv("/content/linear_reg.csv", names= ["X","y"])
X = df["X"].to_numpy()
y = df["y"].to_numpy()
theta  = np.array([1 , 2])
X = np.expand_dims(X, axis = 1)
y = np.expand_dims(y, axis = 1)
theta = np.expand_dims(theta, axis = 1)
X.shape, y.shape, theta.shape
```



