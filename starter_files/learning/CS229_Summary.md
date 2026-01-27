# CS229: Machine Learning Course Summary

## Chapter 1: Linear Regression
- **Definition**: Supervised learning task where the target variable is continuous.
- **Hypothesis**: $h_	heta(x) = \theta^T x$.
- **Cost Function**: Least Mean Squares (LMS) $J(\theta) = \frac{1}{2} \sum_{i=1}^n (h_	heta(x^{(i)}) - y^{(i)})^2$.
- **Optimization**: Gradient Descent (Batch and Stochastic) and Normal Equations ($\theta = (X^T X)^{-1} X^T y$).
- **Probabilistic Interpretation**: Least squares is equivalent to Maximum Likelihood Estimation (MLE) assuming Gaussian noise.
- **Locally Weighted Linear Regression (LWR)**: Non-parametric algorithm that fits $\theta$ at each query point $x$ by weighting training examples based on their proximity to $x$.

## Chapter 2: Classification and Logistic Regression
- **Binary Classification**: $y \in \{0, 1\}$.
- **Logistic Regression**: Uses the sigmoid function $g(z) = \frac{1}{1+e^{-z}}$ to model $P(y=1|x; \theta)$.
- **Optimization**: Gradient Ascent on log-likelihood and Newton's Method (Faster convergence via Hessian inversion).
- **Perceptron Learning Algorithm**: Simple threshold-based classifier; lacks a probabilistic interpretation.
- **Multi-class Classification**: Uses the Softmax function and cross-entropy loss for $k > 2$ classes.

## Chapter 3: Generalized Linear Models (GLMs)
- **Exponential Family**: Distributions of the form $p(y; \eta) = b(y) \exp(\eta^T T(y) - a(\eta))$. Includes Gaussian, Bernoulli, Poisson, etc.
- **GLM Construction**: Assumes $y|x$ is an exponential family distribution and $\eta = \theta^T x$.
- **Relationships**: OLS and Logistic Regression are special cases of GLMs.

## Chapter 4: Generative Learning Algorithms
- **Discriminative vs. Generative**: Discriminative models $p(y|x)$ directly; Generative models $p(x|y)$ and $p(y)$.
- **Gaussian Discriminant Analysis (GDA)**: Models $p(x|y)$ as multivariate normal. More data-efficient if assumptions hold but less robust than logistic regression.
- **Naive Bayes**: Assumes features are conditionally independent given the label. Highly effective for text classification (Bernoulli and Multinomial event models).
- **Laplace Smoothing**: Prevents zero-probability estimates for unseen features.

## Chapter 5: Kernel Methods
- **Feature Maps**: Mapping $x$ to a higher-dimensional space $\phi(x)$ to handle non-linearity.
- **Kernel Trick**: Computing inner products $K(x, z) = \langle \phi(x), \phi(z) \rangle$ without explicitly representing $\phi(x)$.
- **Mercer's Theorem**: Conditions for a function to be a valid kernel (symmetric positive semi-definite kernel matrix).

## Chapter 6: Support Vector Machines (SVMs)
- **Goal**: Find the hyperplane that maximizes the geometric margin between classes.
- **Lagrange Duality**: Transforming the primal problem into a dual form that depends only on inner products, enabling kernels.
- **Support Vectors**: The subset of training points that define the decision boundary.
- **SMO Algorithm**: Efficient optimization algorithm for SVMs.

## Chapter 7: Deep Learning
- **Neural Networks**: Hierarchical models using layers of linear transformations followed by non-linear activations (ReLU, Sigmoid, etc.).
- **Backpropagation**: Efficient application of the Chain Rule to compute gradients for all parameters.
- **Modern Architectures**: Residual connections (ResNet) for depth, Layer Normalization for stability, and Convolutional layers (CNNs) for spatial data.

## Chapter 8: Generalization
- **Bias-Variance Tradeoff**: Bias (underfitting) vs. Variance (overfitting).
- **Double Descent**: Phenomenon where test error decreases again in the overparameterized regime.
- **Learning Theory**: VC-dimension and uniform convergence provide bounds on generalization error based on model capacity and sample size.

## Chapter 9: Regularization and Model Selection
- **Techniques**: L2 (Weight Decay), L1 (LASSO) for sparsity, and Dropout.
- **Model Selection**: Cross-validation (hold-out, k-fold) to choose hyperparameters.
- **Bayesian Perspective**: Viewing parameters as random variables; MAP estimation provides a link to regularization.

## Chapter 10: Clustering and the k-means Algorithm
- **Unsupervised Learning**: Grouping data into $k$ cohesive clusters.
- **Algorithm**: Iteratively assigns points to the nearest centroid and moves centroids to the mean of assigned points.
- **Limitation**: Coordinate descent on a non-convex distortion function (local optima).

## Chapter 11: EM Algorithms
- **Expectation-Maximization**: Framework for maximum likelihood estimation with latent variables (e.g., Mixture of Gaussians).
- **ELBO**: Maximizing the Evidence Lower Bound.
- **Variational Auto-Encoders (VAE)**: Scalable EM using neural networks and the re-parameterization trick.

## Chapter 12: Principal Components Analysis (PCA)
- **Dimensionality Reduction**: Projecting data onto a lower-dimensional subspace that captures the most variance.
- **Computation**: Based on the top $k$ eigenvectors of the empirical covariance matrix.

## Chapter 13: Independent Components Analysis (ICA)
- **Goal**: Signal separation (Cocktail Party Problem) into independent sources.
- **Constraint**: Requires sources to be non-Gaussian to resolve rotational ambiguity.

## Chapter 14: Self-supervised Learning and Foundation Models
- **Paradigm**: Large-scale pretraining on unlabeled data followed by adaptation (fine-tuning, linear probe) to specific tasks.
- **Language Models**: Transformers and autoregressive training (GPT style) enable zero-shot and in-context learning.

## Chapter 15: Reinforcement Learning
- **MDP**: Markov Decision Processes $(S, A, P, \gamma, R)$.
- **Algorithms**: Value Iteration and Policy Iteration based on Bellman equations.
- **Continuous States**: Handled via discretization or value function approximation.

## Chapter 16: LQR, DDP and LQG
- **Control Theory**: Optimal control for linear systems with quadratic rewards (LQR).
- **Extensions**: DDP for non-linear systems and LQG for partially observable states using Kalman Filters.

## Chapter 17: Policy Gradient (REINFORCE)
- **Model-Free RL**: Directly optimizing the policy parameters via gradient ascent on expected reward.
- **Technique**: Uses the likelihood ratio trick and baselines to reduce variance.
