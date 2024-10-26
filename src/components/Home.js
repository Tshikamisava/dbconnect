import { Button, Card, CardContent, Link } from "./ui-components"
import { ChevronRight, DollarSign, LineChart, ShieldCheck, Star, Users } from "lucide-react"


export default function CreditScoreLanding() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <Link className="flex items-center justify-center" href="/">
                    <DollarSign className="h-6 w-6" />
                    <span className="sr-only">CreditConnect</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        Features
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        How It Works
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        Pricing
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        Contact
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="LenderSignup">
                        LenderSignUp
                    </Link>
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Connect Lenders with Small Businesses
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    CreditConnect: The smart way to assess credit risk and fuel small business growth.
                                </p>
                            </div>
                            <div className="space-x-4">
                                <Button>Get Started</Button>
                                <Button variant="outline">Learn More</Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                            Key Features
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card>
                                <CardContent className="flex flex-col items-center p-6 space-y-4">
                                    <LineChart className="h-12 w-12 text-primary" />
                                    <h3 className="text-xl font-bold">Advanced Credit Scoring</h3>
                                    <p className="text-center text-gray-500 dark:text-gray-400">
                                        Utilize AI-powered algorithms for accurate and fair credit assessments.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="flex flex-col items-center p-6 space-y-4">
                                    <Users className="h-12 w-12 text-primary" />
                                    <h3 className="text-xl font-bold">Seamless Matching</h3>
                                    <p className="text-center text-gray-500 dark:text-gray-400">
                                        Connect lenders with qualified small businesses effortlessly.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="flex flex-col items-center p-6 space-y-4">
                                    <ShieldCheck className="h-12 w-12 text-primary" />
                                    <h3 className="text-xl font-bold">Secure Platform</h3>
                                    <p className="text-center text-gray-500 dark:text-gray-400">
                                        Ensure data protection and privacy for all users.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                            How It Works
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">For Lenders</h3>
                                <ol className="space-y-4">
                                    <li className="flex items-center space-x-4">
                                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">1</span>
                                        <span>Sign up and set your lending criteria</span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">2</span>
                                        <span>Review matched small business profiles</span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">3</span>
                                        <span>Make informed lending decisions</span>
                                    </li>
                                </ol>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-4">For Small Businesses</h3>
                                <ol className="space-y-4">
                                    <li className="flex items-center space-x-4">
                                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">1</span>
                                        <span>Create a profile and submit financial information</span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">2</span>
                                        <span>Get matched with potential lenders</span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">3</span>
                                        <span>Compare offers and choose the best fit</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                            What Our Users Say
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <Star className="h-6 w-6 text-yellow-500" />
                                        <Star className="h-6 w-6 text-yellow-500" />
                                        <Star className="h-6 w-6 text-yellow-500" />
                                        <Star className="h-6 w-6 text-yellow-500" />
                                        <Star className="h-6 w-6 text-yellow-500" />
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                                        "CreditConnect has revolutionized our lending process. We've been able to reach more qualified borrowers and grow our portfolio significantly."
                                    </p>
                                    <p className="font-semibold">- Sarah J., Financial Institution</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <Star className="h-6 w-6 text-yellow-500" />
                                        <Star className="h-6 w-6 text-yellow-500" />
                                        <Star className="h-6 w-6 text-yellow-500" />
                                        <Star className="h-6 w-6 text-yellow-500" />
                                        <Star className="h-6 w-6 text-yellow-500" />
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                                        "As a small business owner, finding the right loan was always a challenge. CreditConnect made it easy to connect with lenders and secure the funding we needed to grow."
                                    </p>
                                    <p className="font-semibold">- Michael T., Small Business Owner</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Ready to Transform Your Lending Experience?
                                </h2>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Join CreditConnect today and start connecting with the right partners for your financial journey.
                                </p>
                            </div>
                            <div className="space-x-4">
                                <Button size="lg">
                                    Get Started
                                    <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="lg">
                                    Contact Sales
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 CreditConnect. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Terms of Service
                    </Link>
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>
    )
}