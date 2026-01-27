# CS229: Machine Learning Detailed Study Guide

## Chapter 1: Linear Regression
- **Key Concept**: Predicting a continuous value $y$ from features $x$.
- **Hypothesis**: $h_\theta(x) = \sum_{i=0}^d \theta_i x_i = \theta^T x$ (with $x_0 = 1$ for intercept).
- **LMS Algorithm**: Update rule $\theta_j := \theta_j + \alpha (y^{(i)} - h_\theta(x^{(i)})) x_j^{(i)}$.
- **Normal Equations**: Closed-form solution $\theta = (X^T X)^{-1} X^T y$.
- **Underfitting/Overfitting**:
    - Underfitting: Model is too simple (high bias).
    - Overfitting: Model is too complex (high variance).
- **LWR (Locally Weighted Regression)**: $w^{(i)} = \exp\left(-\frac{(x^{(i)}-x)^2}{2\tau^2}\right)$. Fits local data around query point.

## Chapter 2: Classification and Logistic Regression
- **Sigmoid/Logistic Function**: $g(z) = \frac{1}{1+e^{-z}}$. Bounded between 0 and 1.
- **Log-Likelihood**: $\ell(\theta) = \sum_{i=1}^n y^{(i)} \log h(x^{(i)}) + (1-y^{(i)}) \log(1-h(x^{(i)}))$.
- **Newton's Method**: $\theta := \theta - H^{-1} \nabla_\theta \ell(\theta)$. Quadratic convergence.
- **Softmax Regression**: Generalizes logistic regression to $k$ classes. $P(y=j|x) = \frac{e^{\theta_j^T x}}{\sum e^{\theta_l^T x}}$.

## Chapter 3: Generalized Linear Models (GLMs)
- **Exponential Family**: $p(y; \eta) = b(y) \exp(\eta^T T(y) - a(\eta))$.
- **Assumptions**: 
    1. $y|x; \theta \sim \text{ExpFamily}(\eta)$.
    2. $h(x) = E[T(y)|x]$.
    3. $\eta = \theta^T x$.
- **Canonical Link Function**: $g^{-1}$ where $\eta = \psi(E[y])$.

## Chapter 4: Generative Learning Algorithms
- **GDA (Gaussian Discriminant Analysis)**:
    - $y \sim \text{Bernoulli}(\phi)$
    - $x|y=0 \sim N(\mu_0, \Sigma)$
    - $x|y=1 \sim N(\mu_1, \Sigma)$
- **Naive Bayes Assumption**: $p(x_1, \dots, x_d | y) = \prod p(x_j | y)$.
- **Laplace Smoothing**: $\phi_j = \frac{1 + \text{count}}{k + \text{total}}$ to avoid zero probabilities.

## Chapter 5: Kernel Methods
- **Kernel Trick**: Replace $\langle x, z \rangle$ with $K(x, z) = \langle \phi(x), \phi(z) \rangle$.
- **Gaussian (RBF) Kernel**: $K(x, z) = \exp\left(-\frac{\|x-z\|^2}{2\sigma^2}\right)$. Corresponds to infinite-dimensional feature space.
- **Mercer's Theorem**: $K$ is valid if the kernel matrix is symmetric positive semi-definite.

## Chapter 6: Support Vector Machines (SVMs)
- **Geometric Margin**: Distance of a point to the decision boundary.
- **Functional Margin**: $\hat{\gamma}^{(i)} = y^{(i)}(w^T x + b)$.
- **Optimization**: Minimize $\frac{1}{2}\|w\|^2$ subject to $y^{(i)}(w^T x + b) \ge 1$.
- **Dual Problem**: Depends only on $\langle x^{(i)}, x^{(j)} \rangle$, allowing the use of kernels.
- **KKT Conditions**: Complementary slackness $\alpha_i g_i(w^*) = 0$ implies $\alpha_i > 0$ only for support vectors.

## Chapter 7: Deep Learning
- **ReLU**: $f(z) = \max(0, z)$. Prevents vanishing gradient in positive region.
- **Backpropagation**: Gradient computation via recursive application of chain rule from output to input.
- **ResNet**: $z + f(z)$ bypasses layers to enable training of very deep networks.
- **Normalization**: LayerNorm and BatchNorm stabilize training by fixing mean/variance of activations.

## Chapter 8: Generalization
- **Hoeffding's Inequality**: Bounds the probability that empirical error deviates significantly from generalization error.
- **VC Dimension**: Maximum number of points that can be shattered by a hypothesis class $H$.
- **Sample Complexity**: $n = O(\frac{1}{\epsilon^2} \log \frac{|H|}{\delta})$ for finite $H$.
- **Double Descent**: Test error can drop again as parameters $d$ exceed samples $n$.

## Chapter 9: Regularization and Model Selection
- **L2 Regularization (Weight Decay)**: Adds $\lambda \|w\|^2$ to cost. Shrinks weights.
- **L1 Regularization (LASSO)**: Adds $\lambda \|w\|_1$. Encourages sparsity.
- **Cross-Validation**: $k$-fold is standard. Leave-one-out for very small datasets.
- **MAP Estimation**: MLE with a prior $p(\theta)$. Gaussian prior $\iff$ L2 regularization.

## Chapter 10: Clustering and k-means
- **Algorithm**: 
    1. Assign $c^{(i)} = \arg\min \|x^{(i)} - \mu_j\|^2$.
    2. Update $\mu_j = \text{mean of points assigned to cluster } j$.
- **Distortion Function**: $J(c, \mu) = \sum \|x^{(i)} - \mu_{c^{(i)}}\|^2$. Non-convex.

## Chapter 11: EM Algorithms
- **E-step**: Calculate posterior $Q_i(z^{(i)}) = p(z^{(i)} | x^{(i)}; \theta)$.
- **M-step**: $\theta := \arg\max_\theta \sum_i E_{Q_i} [\log p(x^{(i)}, z^{(i)}; \theta)]$.
- **Jensen's Inequality**: $\log E[X] \ge E[\log X]$ for concave log. Used to derive ELBO.

## Chapter 12: PCA
- **Goal**: Find $k$ directions that maximize projected variance.
- **Method**: Compute eigenvectors of covariance matrix $\Sigma = \frac{1}{n} \sum x^{(i)} (x^{(i)})^T$.
- **Applications**: Visualization, compression, noise reduction.

## Chapter 13: Independent Components Analysis (ICA)
- **Model**: $x = As$. Recover $s = Wx$.
- **Core Assumption**: Sources $s_i$ must be independent and non-Gaussian.
- **Ambiguities**: Scaling and permutation cannot be recovered.

## Chapter 14: Self-supervised Learning
- **Contrastive Learning (SimCLR)**: Maximize similarity of positive pairs (augmentations of same image) vs negative pairs.
- **Transformers**: Multi-head attention mechanisms for sequence modeling.
- **Foundational Models**: Pretrained at scale, adapted via linear probing or fine-tuning.

## Chapter 15: Reinforcement Learning
- **MDP**: $(S, A, P, \gamma, R)$.
- **Bellman Equation**: $V^*(s) = R(s) + \gamma \max_a \sum P_{sa}(s') V^*(s')$.
- **Value Iteration**: $V(s) := R(s) + \gamma \max_a E[V(s')]$.
- **Policy Iteration**: Alternate between policy evaluation and policy improvement.

## Chapter 16: LQR, DDP and LQG
- **LQR**: Optimal control for $s_{t+1} = As_t + Ba_t + w_t$ with quadratic rewards.
- **DDP**: Iterative linearization of non-linear dynamics to apply LQR.
- **LQG**: LQR with partially observed states using a Kalman Filter for state estimation.

## Chapter 17: Policy Gradient
- **REINFORCE**: $\nabla_\theta \eta(\theta) = E[\sum \nabla_\theta \log \pi_\theta(a_t|s_t) \cdot G_t]$.
- **Likelihood Ratio Trick**: $\nabla_\theta p_\theta(\tau) = p_\theta(\tau) \nabla_\theta \log p_\theta(\tau)$.
- **Baselines**: Subtracting a baseline $B(s_t)$ (like the value function) reduces variance without adding bias.
