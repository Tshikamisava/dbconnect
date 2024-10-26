import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Button,
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Input,
    Label,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    Slider,
    Switch,
    toast,
    Link
} from "./ui-components";


const formSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    companyName: z.string().min(2, { message: "Company name must be at least 2 characters long" }),
    lenderType: z.enum(["bank", "credit_union", "alternative_lender", "peer_to_peer"]),
    minCreditScore: z.number().min(300).max(850),
    maxLoanAmount: z.number().min(1000),
    interestRateRange: z.tuple([z.number(), z.number()]),
    preferredIndustries: z.array(z.string()).min(1, { message: "Select at least one industry" }),
    // offerSecuredLoans: z.boolean(),
});

export default function LenderSignupForm() {
    const [interestRateRange, setInterestRateRange] = useState([5, 15]);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            companyName: "",
            lenderType: "bank",
            minCreditScore: 650,
            maxLoanAmount: 100000,
            interestRateRange: [5, 15],
            preferredIndustries: [],
            // offerSecuredLoans: false,
        },
    });

    function onSubmit(values) {
        console.log(values);
        toast({
            title: "Account created",
            description: "Your lender account has been created and your lending criteria have been set.",
        });
    }

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>Sign up as a Lender</CardTitle>
                <CardDescription>Create your account and set your lending criteria</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        {/* Email */}
                        <FormField name="email">
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input {...form.register("email")} placeholder="Enter your email" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </FormField>

                        {/* Password */}
                        <FormField name="password">
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input {...form.register("password")} type="password" placeholder="Enter your password" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </FormField>

                        {/* Company Name */}
                        <FormField name="companyName">
                            <FormItem>
                                <FormLabel>Company Name</FormLabel>
                                <FormControl>
                                    <Input {...form.register("companyName")} placeholder="Enter your company name" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </FormField>
                        
                        {/* Lender Type */}
                        <FormField name="lenderType">
                            <FormItem>
                                <FormLabel>Lender Type</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={(value) => form.setValue("lenderType", value)}
                                        value={form.watch("lenderType")}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select lender type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="bank">Bank</SelectItem>
                                            <SelectItem value="credit_union">Credit Union</SelectItem>
                                            <SelectItem value="alternative_lender">Alternative Lender</SelectItem>
                                            <SelectItem value="peer_to_peer">Peer-to-Peer Platform</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </FormField>


                        {/* Minimum Credit Score */}
                        <FormField name="minCreditScore">
                            <FormItem>
                                <FormLabel>Minimum Credit Score</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        min={300}
                                        max={850}
                                        {...form.register("minCreditScore")}
                                        onChange={(e) => form.setValue("minCreditScore", +e.target.value)}
                                    />
                                </FormControl>
                                <FormDescription>Enter a value between 300 and 850</FormDescription>
                                <FormMessage />
                            </FormItem>
                        </FormField>

                        {/* Maximum Loan Amount */}
                        <FormField name="maxLoanAmount">
                            <FormItem>
                                <FormLabel>Maximum Loan Amount ($)</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        min={1000}
                                        {...form.register("maxLoanAmount")}
                                        onChange={(e) => form.setValue("maxLoanAmount", +e.target.value)}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </FormField>

                        {/* Interest Rate Range */}
                        <FormField name="interestRateRange">
    <FormItem>
        <FormLabel>Interest Rate Range (%)</FormLabel>
        <FormControl>
                                    <Slider
                                        min={0}
                                        max={30}
                                        step={0.1}
                                        value={interestRateRange}
                                        onChange={(value) => {  // Changed from onValueChange to onChange
                                            setInterestRateRange(value);
                                            form.setValue("interestRateRange", value);
                                        }}
                                    />
        </FormControl>
        <FormDescription>
            {interestRateRange[0]}% - {interestRateRange[1]}%
        </FormDescription>
        <FormMessage />
    </FormItem>
</FormField>


                        {/* Preferred Industries */}
                        <FormField name="preferredIndustries">
                            <FormItem>
                                <FormLabel>Preferred Industries</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={(value) => form.setValue("preferredIndustries", [...form.watch("preferredIndustries"), value])}
                                        value={form.watch("preferredIndustries")[form.watch("preferredIndustries").length - 1]}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select industries" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="technology">Technology</SelectItem>
                                            <SelectItem value="healthcare">Healthcare</SelectItem>
                                            <SelectItem value="retail">Retail</SelectItem>
                                            <SelectItem value="manufacturing">Manufacturing</SelectItem>
                                            <SelectItem value="finance">Finance</SelectItem>
                                            <SelectItem value="real_estate">Real Estate</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormDescription>Selected: {form.watch("preferredIndustries").join(", ")}</FormDescription>
                                <FormMessage />
                            </FormItem>
                        </FormField>


                        {/* Offer Secured Loans */}
                        {/* <FormField name="offerSecuredLoans">
                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                <div className="space-y-0.5">
                                    <FormLabel className="text-base">Offer Secured Loans</FormLabel>
                                    <FormDescription>
                                        Toggle if you offer loans that require collateral
                                    </FormDescription>
                                </div>
                                <FormControl>
                                    <Switch
                                        checked={form.watch("offerSecuredLoans")}
                                        onCheckedChange={(checked) => form.setValue("offerSecuredLoans", checked)}
                                    />
                                </FormControl>
                            </FormItem>
                        </FormField> */}


                        <Button type="submit" className="w-full">
                            Create Account and Set Criteria
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
