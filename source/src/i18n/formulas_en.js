// 公式大全英文版（与 pages/Formulas/formulas.ux 中的 CATEGORIES 一一对应）
export default [
  {
    name: 'Identities & factoring',
    list: [
      { title: 'Difference of squares', content: '(a+b)(a-b) = a²-b²' },
      { title: 'Square of a sum', content: '(a+b)² = a²+2ab+b²' },
      { title: 'Square of a difference', content: '(a-b)² = a²-2ab+b²' },
      { title: 'Sum of cubes', content: 'a³+b³ = (a+b)(a²-ab+b²)' },
      { title: 'Difference of cubes', content: 'a³-b³ = (a-b)(a²+ab+b²)' },
      { title: 'Square of a trinomial', content: '(a+b+c)² = a²+b²+c²+2ab+2bc+2ca' },
      { title: 'Sum of three cubes', content: 'a³+b³+c³-3abc = (a+b+c)(a²+b²+c²-ab-bc-ca)' },
      { title: 'Completing the square', content: 'ax²+bx+c = a(x+b/(2a))² + (4ac-b²)/(4a)' },
      { title: 'Factoring methods', content: 'Common factor, identities, cross method, grouping' },
      { title: 'Telescoping fractions', content: '1/(n(n+1)) = 1/n - 1/(n+1)' }
    ]
  },
  {
    name: 'Equations & inequalities',
    list: [
      { title: 'Quadratic formula', content: 'x = (-b±√(b²-4ac))/(2a)' },
      { title: 'Discriminant', content: 'Δ = b²-4ac; Δ>0 two real roots, Δ=0 double root, Δ<0 no real roots' },
      { title: "Vieta's formulas", content: 'x₁+x₂ = -b/a, x₁·x₂ = c/a' },
      { title: 'Inequality properties', content: 'Multiplying by a positive keeps the sign; by a negative reverses it' },
      { title: 'AM-GM inequality', content: 'a+b ≥ 2√(ab) (a,b>0), ab ≤ ((a+b)/2)²' },
      { title: 'Chain of means', content: '(a+b)/2 ≥ √(ab) ≥ 2ab/(a+b) (a,b>0)' },
      { title: 'Triangle inequality', content: '|a+b| ≤ |a|+|b|, |a-b| ≥ ||a|-|b||' },
      { title: 'Cauchy-Schwarz', content: '(a²+b²)(c²+d²) ≥ (ac+bd)²' },
      { title: 'Rational equations', content: 'Clear denominators first; always check the roots' },
      { title: 'Quadratic inequality', content: 'Solution of ax²+bx+c>0 comes from where the parabola crosses the x-axis' }
    ]
  },
  {
    name: 'Sets & logic',
    list: [
      { title: 'Intersection, union, complement', content: 'A∩B (common part), A∪B (all together), ∁ᵤA (complement)' },
      { title: "De Morgan's laws", content: '∁(A∪B) = (∁A)∩(∁B), ∁(A∩B) = (∁A)∪(∁B)' },
      { title: 'Number of subsets', content: 'A set with n elements has 2ⁿ subsets and 2ⁿ-1 proper subsets' },
      { title: 'Sufficient & necessary', content: 'p⇒q: p is sufficient, q is necessary; p⟺q: each is necessary and sufficient' },
      { title: 'Four forms of a statement', content: 'Statement, converse, inverse, contrapositive; contrapositives share truth value' },
      { title: 'Inclusion', content: 'A⊆B ⟺ A∩B = A ⟺ A∪B = B' },
      { title: 'Empty set', content: '∅ is a subset of every set and a proper subset of every non-empty set' }
    ]
  },
  {
    name: 'Functions',
    list: [
      { title: 'Common domain limits', content: 'Denominator ≠0, even root ≥0, log argument >0' },
      { title: 'Linear function', content: 'y = kx+b; k>0 increasing, k<0 decreasing, passes (0,b)' },
      { title: 'Quadratic, vertex form', content: 'y = a(x-h)²+k, vertex (h,k), axis x=h' },
      { title: 'Quadratic, standard form', content: 'y = ax²+bx+c, axis x=-b/(2a), vertex y = (4ac-b²)/(4a)' },
      { title: 'Quadratic, factored form', content: 'y = a(x-x₁)(x-x₂), x₁, x₂ are the x-intercepts' },
      { title: 'Inverse proportion', content: 'y = k/x, hyperbola; k>0 in quadrants I and III; symmetric about the origin' },
      { title: 'Even & odd', content: 'f(-x)=f(x) even (y-axis symmetry); f(-x)=-f(x) odd (origin symmetry)' },
      { title: 'Odd function fact', content: 'If an odd function is defined at x=0, then f(0)=0' },
      { title: 'Graph shifts', content: 'f(x+a) shifts left, f(x-a) right; f(x)+b up, f(x)-b down' },
      { title: 'Finding the range', content: 'Completing the square, discriminant, substitution, monotonicity, separating constants' }
    ]
  },
  {
    name: 'Exponents & logarithms',
    list: [
      { title: 'Exponent rules', content: 'aᵐ·aⁿ=aᵐ⁺ⁿ, (aᵐ)ⁿ=aᵐⁿ, aᵐ÷aⁿ=aᵐ⁻ⁿ, (ab)ᵐ=aᵐbᵐ' },
      { title: 'Fractional & negative exponents', content: 'a^(m/n) = ⁿ√(aᵐ), a⁻ⁿ = 1/aⁿ (a>0)' },
      { title: 'Logarithm definition', content: 'a^b=N ⟺ logₐN=b (a>0 and a≠1)' },
      { title: 'Logarithm rules', content: 'logₐ(MN)=logₐM+logₐN, logₐ(M/N)=logₐM-logₐN, logₐMⁿ=n·logₐM' },
      { title: 'Change of base', content: 'logₐb = logc b ÷ logc a' },
      { title: 'Useful facts', content: 'lg2+lg5=1, lg1=0, logₐa=1, lne=1' },
      { title: 'Exponential function', content: 'y=aˣ passes (0,1); a>1 increasing, 0<a<1 decreasing; range (0,+∞)' },
      { title: 'Logarithmic function', content: 'y=logₐx passes (1,0); a>1 increasing, 0<a<1 decreasing; domain (0,+∞)' }
    ]
  },
  {
    name: 'Trigonometry',
    list: [
      { title: 'Right-triangle definitions', content: 'sinA=opposite/hypotenuse, cosA=adjacent/hypotenuse, tanA=opposite/adjacent' },
      { title: 'Basic identities', content: 'sin²α+cos²α = 1, tanα = sinα/cosα' },
      { title: 'Reduction formulas', content: 'Odd multiples of π/2 swap the function, even keep it; sign by quadrant; sin(π/2-α)=cosα etc.' },
      { title: 'Angle addition', content: 'sin(α±β)=sinαcosβ±cosαsinβ; cos(α±β)=cosαcosβ∓sinαsinβ' },
      { title: 'Tangent addition', content: 'tan(α±β) = (tanα±tanβ)/(1∓tanαtanβ)' },
      { title: 'Double angle', content: 'sin2α=2sinαcosα; cos2α=cos²α-sin²α=2cos²α-1=1-2sin²α' },
      { title: 'Double-angle tangent', content: 'tan2α = 2tanα/(1-tan²α)' },
      { title: 'Half angle', content: 'sin(α/2)=±√((1-cosα)/2), cos(α/2)=±√((1+cosα)/2)' },
      { title: 'Sum to product', content: 'sinA+sinB=2sin((A+B)/2)cos((A-B)/2); cosA+cosB=2cos((A+B)/2)cos((A-B)/2)' },
      { title: 'Product to sum', content: 'sinAcosB=(sin(A+B)+sin(A-B))/2; cosAcosB=(cos(A+B)+cos(A-B))/2' },
      { title: 'Harmonic addition', content: 'asinx+bcosx = √(a²+b²)·sin(x+φ)' },
      { title: 'Special angles', content: 'sin30°=1/2, sin45°=√2/2, sin60°=√3/2; tan30°=√3/3, tan60°=√3' },
      { title: 'Law of sines', content: 'a/sinA = b/sinB = c/sinC = 2R (R circumradius)' },
      { title: 'Law of cosines', content: 'c² = a²+b²-2ab·cosC' },
      { title: 'Triangle area', content: 'S = (1/2)ab·sinC' },
      { title: 'Function properties', content: 'y=sinx period 2π, range [-1,1]; y=tanx period π, x≠π/2+kπ' }
    ]
  },
  {
    name: 'Sequences',
    list: [
      { title: 'Arithmetic: n-th term', content: 'aₙ = a₁ + (n-1)d' },
      { title: 'Arithmetic: sum', content: 'Sₙ = n(a₁+aₙ)/2 = na₁ + n(n-1)d/2' },
      { title: 'Arithmetic mean', content: '2b = a+c (a, b, c arithmetic)' },
      { title: 'Arithmetic property', content: 'aₘ+aₙ = aₚ+a_q (m+n=p+q)' },
      { title: 'Geometric: n-th term', content: 'aₙ = a₁·q^(n-1)' },
      { title: 'Geometric: sum', content: 'q=1: Sₙ=na₁; q≠1: Sₙ = a₁(1-qⁿ)/(1-q)' },
      { title: 'Geometric mean', content: 'b² = a·c (a, b, c geometric, a and c same sign)' },
      { title: 'Term from partial sums', content: 'aₙ = S₁ (n=1); aₙ = Sₙ-Sₙ₋₁ (n≥2)' },
      { title: 'Common sums', content: '1+2+…+n = n(n+1)/2; 1²+2²+…+n² = n(n+1)(2n+1)/6' },
      { title: 'Telescoping sum', content: '1/(n(n+1)) = 1/n - 1/(n+1)' }
    ]
  },
  {
    name: 'Plane vectors',
    list: [
      { title: 'Addition & subtraction', content: 'Triangle rule (head to tail), parallelogram rule' },
      { title: 'Dot product', content: 'a·b = |a||b|cosθ = x₁x₂+y₁y₂' },
      { title: 'Perpendicular', content: 'a⊥b ⟺ a·b = 0 ⟺ x₁x₂+y₁y₂ = 0' },
      { title: 'Angle between vectors', content: 'cosθ = (x₁x₂+y₁y₂)/(√(x₁²+y₁²)·√(x₂²+y₂²))' },
      { title: 'Magnitude', content: '|a|² = a·a = x²+y², |a| = √(x²+y²)' },
      { title: 'Coordinate operations', content: 'a+b = (x₁+x₂, y₁+y₂), λa = (λx, λy)' },
      { title: 'Projection', content: 'Scalar projection of b onto a = |b|cosθ' },
      { title: 'Midpoint', content: '((x₁+x₂)/2, (y₁+y₂)/2)' },
      { title: 'Collinear', content: 'a∥b ⟺ x₁y₂-x₂y₁ = 0' }
    ]
  },
  {
    name: 'Analytic geometry',
    list: [
      { title: 'Slope', content: 'k = (y₂-y₁)/(x₂-x₁) = tanα (α inclination angle)' },
      { title: 'Point-slope form', content: 'y - y₀ = k(x - x₀)' },
      { title: 'Slope-intercept form', content: 'y = kx + b' },
      { title: 'Two-point form', content: '(y-y₁)/(y₂-y₁) = (x-x₁)/(x₂-x₁)' },
      { title: 'Intercept form', content: 'x/a + y/b = 1 (a, b are the intercepts)' },
      { title: 'General form', content: 'Ax + By + C = 0 (A, B not both 0)' },
      { title: 'Parallel & perpendicular', content: 'k₁=k₂ and distinct: parallel; k₁·k₂=-1: perpendicular' },
      { title: 'Distance between points', content: '|AB| = √((x₂-x₁)² + (y₂-y₁)²)' },
      { title: 'Point-line distance', content: 'd = |Ax₀+By₀+C|/√(A²+B²)' },
      { title: 'Circle', content: '(x-a)² + (y-b)² = r²; general x²+y²+Dx+Ey+F=0' },
      { title: 'Ellipse', content: 'x²/a² + y²/b² = 1 (a>b>0), a² = b²+c², e = c/a' },
      { title: 'Ellipse focal radii', content: '|PF₁| = a+ex₀, |PF₂| = a-ex₀ (left, right focus)' },
      { title: 'Hyperbola', content: 'x²/a² - y²/b² = 1, c² = a²+b², asymptotes y = ±(b/a)x' },
      { title: 'Parabola', content: 'y² = 2px (p>0), focus (p/2, 0), directrix x = -p/2' },
      { title: 'Latus rectum (shortest focal chord)', content: 'Ellipse & hyperbola 2b²/a; parabola 2p' },
      { title: 'Parabola focal chord', content: 'Length of a chord through the focus = x₁+x₂+p' }
    ]
  },
  {
    name: 'Solid geometry',
    list: [
      { title: 'Prism / cylinder volume', content: 'V = Sh (S base area, h height)' },
      { title: 'Pyramid / cone volume', content: 'V = Sh/3' },
      { title: 'Frustum volume', content: 'V = h(S₁+√(S₁S₂)+S₂)/3' },
      { title: 'Sphere volume', content: 'V = 4πr³/3' },
      { title: 'Sphere surface area', content: 'S = 4πr²' },
      { title: 'Lateral area', content: 'Cylinder S=2πrh; cone S=πrl' },
      { title: 'Cuboid diagonal', content: 'd = √(a²+b²+c²)' },
      { title: 'Equal-volume method', content: 'Swap the apex of a tetrahedron, V = (1/3)Sh, to find a height' },
      { title: 'Angle between skew lines', content: 'cosθ = |cos⟨m,n⟩| (absolute value for direction vectors)' },
      { title: 'Dihedral angle', content: 'cosθ = (n₁·n₂)/(|n₁||n₂|) (angle between normals)' },
      { title: 'Line-plane angle', content: 'sinθ = |cos⟨direction vector, plane normal⟩|' }
    ]
  },
  {
    name: 'Probability & statistics',
    list: [
      { title: 'Classical probability', content: 'P(A) = outcomes in A ÷ total outcomes' },
      { title: 'Complement', content: 'P(A) = 1 - P(not A)' },
      { title: 'Independent events', content: 'P(AB) = P(A)·P(B)' },
      { title: 'Conditional probability', content: 'P(A|B) = P(AB)/P(B)' },
      { title: 'Mutually exclusive', content: 'P(A∪B) = P(A) + P(B)' },
      { title: 'Expected value', content: 'E(X) = Σ xᵢpᵢ' },
      { title: 'Variance', content: 'D(X) = Σ(xᵢ-E(X))²pᵢ = E(X²) - (E(X))²' },
      { title: 'Linearity', content: 'E(aX+b) = aE(X)+b; D(aX+b) = a²D(X)' },
      { title: 'Binomial distribution', content: 'X~B(n,p), E(X)=np, D(X)=np(1-p)' },
      { title: 'Regression line', content: 'ŷ = bx+a, b = Σ(xᵢ-x̄)(yᵢ-ȳ)/Σ(xᵢ-x̄)², passes (x̄, ȳ)' },
      { title: 'Mean, median, mode', content: 'Mean = sum ÷ count; median = middle value when sorted; mode = most frequent' },
      { title: 'Meaning of variance', content: 'Smaller variance means less spread, more stable data' }
    ]
  },
  {
    name: 'Combinatorics & binomial',
    list: [
      { title: 'Permutations', content: 'A(n,m) = n!/(n-m)! = n(n-1)…(n-m+1)' },
      { title: 'Combinations', content: 'C(n,m) = n!/(m!(n-m)!)' },
      { title: 'Combination identities', content: 'C(n,m) = C(n,n-m); C(n,m) = C(n-1,m-1) + C(n-1,m)' },
      { title: 'Full permutation', content: 'P(n) = n! (arranging all n elements)' },
      { title: 'Binomial theorem', content: '(a+b)ⁿ = Σ C(n,k)·a^(n-k)·b^k (k from 0 to n)' },
      { title: 'General term', content: 'T(r+1) = C(n,r)·a^(n-r)·b^r' },
      { title: 'Sum of coefficients', content: 'C(n,0)+C(n,1)+…+C(n,n) = 2ⁿ' },
      { title: 'Largest coefficient', content: 'n even: the middle term is largest; n odd: the two middle terms are equal and largest' },
      { title: 'Grouping & distributing', content: 'Group first, then distribute; equal groups: divide by (number of groups)!' },
      { title: 'Special elements first', content: 'Adjacent: bundle them; non-adjacent: insert into gaps; at least/at most: use the complement' }
    ]
  },
  {
    name: 'Derivatives & integrals',
    list: [
      { title: 'Basic derivatives', content: "C'=0, (xⁿ)' = nxⁿ⁻¹, (√x)' = 1/(2√x)" },
      { title: 'Trig derivatives', content: "(sinx)' = cosx, (cosx)' = -sinx" },
      { title: 'Exp & log derivatives', content: "(eˣ)' = eˣ, (aˣ)' = aˣlna, (lnx)' = 1/x" },
      { title: 'Arithmetic rules', content: "(u±v)' = u'±v', (uv)' = u'v+uv', (u/v)' = (u'v-uv')/v²" },
      { title: 'Chain rule', content: "(f(g(x)))' = f'(g(x))·g'(x) (outside in)" },
      { title: 'Differentiable & continuous', content: 'Differentiable implies continuous, not the other way round' },
      { title: 'Extremum condition', content: "f'(x₀)=0 and the derivative changes sign around x₀" },
      { title: 'Average rate of change', content: 'Δy/Δx = (f(x₂)-f(x₁))/(x₂-x₁)' },
      { title: 'Definite integral', content: '∫[a,b] f(x)dx = F(b) - F(a) (Newton-Leibniz)' },
      { title: 'Geometric meaning', content: 'Area between the curve, the x-axis and x=a, x=b (positive above the x-axis)' }
    ]
  },
  {
    name: 'Complex numbers',
    list: [
      { title: 'Imaginary unit', content: 'i² = -1, i⁴ = 1, powers of i repeat every 4' },
      { title: 'Algebraic form', content: 'z = a + bi (a real part, b imaginary part)' },
      { title: 'Addition & subtraction', content: '(a+bi)+(c+di) = (a+c)+(b+d)i' },
      { title: 'Multiplication', content: '(a+bi)(c+di) = (ac-bd)+(ad+bc)i' },
      { title: 'Division', content: '(a+bi)/(c+di) = ((a+bi)(c-di))/(c²+d²)' },
      { title: 'Conjugate', content: 'The conjugate of z=a+bi is a-bi; z × conjugate = a²+b² = |z|²' },
      { title: 'Modulus', content: '|z| = √(a²+b²)' },
      { title: 'Real & imaginary parts', content: 'Real = (z+conjugate)/2, imaginary = (z-conjugate)/(2i)' },
      { title: 'Polar form', content: 'z = r(cosθ+isinθ); De Moivre: zⁿ = rⁿ(cosnθ+isinnθ)' }
    ]
  },
  {
    name: 'Plane geometry (basic)',
    list: [
      { title: 'Pythagorean theorem', content: 'Right triangle a²+b² = c² (c hypotenuse); the converse holds' },
      { title: 'Triangle angle sum', content: 'Interior angles of any triangle = 180°' },
      { title: 'Polygon angle sum', content: '(n-2)×180°; each angle of a regular n-gon = (n-2)×180°/n' },
      { title: 'Triangle area', content: 'S = (1/2)×base×height' },
      { title: 'Parallelogram area', content: 'S = base×height' },
      { title: 'Trapezoid area', content: 'S = (top+bottom)×height÷2' },
      { title: 'Rhombus area', content: 'S = diagonal₁×diagonal₂÷2' },
      { title: 'Sector area & arc length', content: 'S = nπr²/360 = (1/2)lr; l = nπr/180' },
      { title: 'Congruence tests', content: 'SSS, SAS, ASA, AAS, HL (right triangles)' },
      { title: 'Similarity', content: 'Corresponding sides proportional; area ratio = ratio², volume ratio = ratio³' },
      { title: 'Inscribed angle theorem', content: 'Central angle = 2× inscribed angle on the same arc; angle in a semicircle = 90°' },
      { title: 'Tangent properties', content: 'A tangent is perpendicular to the radius at the point of contact; two tangents from an outside point are equal' },
      { title: 'Perpendicular chord', content: 'A diameter perpendicular to a chord bisects the chord and both its arcs' },
      { title: 'Point vs circle', content: 'Distance d>r outside, d=r on the circle, d<r inside' }
    ]
  },
  {
    name: 'Numbers & expressions',
    list: [
      { title: 'Sign of powers', content: 'Powers of positives are positive; negatives: odd power negative, even power positive' },
      { title: 'Scientific notation', content: 'a×10ⁿ, where 1≤|a|<10' },
      { title: 'Absolute value', content: '|a| = a (a≥0); |a| = -a (a<0)' },
      { title: 'Proportions', content: 'a/b = c/d ⟹ ad = bc; a/b = c/b ⟹ a=c' },
      { title: 'Square roots', content: '(√a)² = a (a≥0); √(a²) = |a|' },
      { title: 'Real numbers', content: 'Rational (integers, fractions) and irrational (non-repeating infinite decimals)' },
      { title: 'Weighted mean', content: 'Sum of value×weight ÷ sum of weights' },
      { title: 'Variance (middle school)', content: 's² = [(x₁-x̄)²+(x₂-x̄)²+…+(xₙ-x̄)²]/n' },
      { title: 'Linear equation', content: 'ax+b=0 (a≠0) has solution x = -b/a' },
      { title: 'Inequality rules', content: 'a>b ⟹ a+c>b+c; a>b and c>0 ⟹ ac>bc; reversed when c<0' }
    ]
  },
  {
    name: 'Physics formulas',
    list: [
      { title: 'Speed', content: 'v = s/t (m/s)' },
      { title: 'Acceleration', content: 'a = (v - v₀)/t (m/s²)' },
      { title: 'Uniform acceleration', content: 'v = v₀+at; s = v₀t+at²/2; v²-v₀² = 2as' },
      { title: "Newton's second law", content: 'F = ma (N)' },
      { title: 'Weight', content: 'G = mg (g ≈ 9.8 N/kg)' },
      { title: 'Density', content: 'ρ = m/V (kg/m³)' },
      { title: 'Pressure', content: 'p = F/S (Pa); in a liquid p = ρgh' },
      { title: "Archimedes' principle", content: 'F(buoyancy) = ρ(liquid)·g·V(displaced)' },
      { title: 'Work & power', content: 'W = Fs (J); P = W/t = Fv (W)' },
      { title: 'Mechanical energy', content: 'Kinetic Ek = mv²/2; potential Ep = mgh; total is conserved' },
      { title: 'Lever balance', content: 'F₁·l₁ = F₂·l₂' },
      { title: 'Heat', content: 'Q = cmΔt (c specific heat); burning fuel Q = mq' },
      { title: "Ohm's law", content: 'I = U/R (A, V, Ω)' },
      { title: 'Electric work & power', content: 'W = UIt; P = UI = I²R = U²/R' },
      { title: "Joule's law", content: 'Q = I²Rt' },
      { title: 'Series circuit', content: 'R = R₁+R₂, U = U₁+U₂, same current everywhere' },
      { title: 'Parallel circuit', content: '1/R = 1/R₁+1/R₂, same U, I = I₁+I₂' },
      { title: 'Universal gravitation', content: 'F = GMm/r²' },
      { title: 'Momentum', content: 'p = mv; conserved in collisions: Σp before = Σp after' },
      { title: 'Ampère force', content: 'F = BIL (B magnetic field, I current, L wire length)' }
    ]
  },
  {
    name: 'Chemistry calculations',
    list: [
      { title: 'Amount of substance', content: 'n = m/M (m mass in g, M molar mass in g/mol)' },
      { title: 'Number of particles', content: 'N = n × 6.02×10²³ (Avogadro constant)' },
      { title: 'Molar gas volume', content: 'V = n × 22.4 L/mol (at STP)' },
      { title: 'Molar concentration', content: 'c = n/V (V solution volume in L)' },
      { title: 'Mass fraction', content: 'w = m(solute)/m(solution) × 100%' },
      { title: 'Dilution', content: 'c₁V₁ = c₂V₂ (moles of solute unchanged)' },
      { title: 'Concentration conversion', content: 'c = 1000ρw/M (ρ in g/mL, w mass fraction)' },
      { title: 'Conservation of mass', content: 'Total mass of reactants = total mass of products' },
      { title: 'Reaction rate', content: 'v = Δc/Δt (mol/(L·s))' },
      { title: 'pH', content: 'pH = -lg[H⁺]; larger [H⁺] means lower pH' },
      { title: 'Solubility', content: 'S = m(solute)/m(solvent) × 100g (at a given temperature)' },
      { title: 'Balancing equations', content: 'Atom types and counts are unchanged; least common multiple method' }
    ]
  }
]
