import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Button,
    Textarea,
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
    businessName: z.string().min(2, { message: "Business name must be at least 2 characters long" }),
    industry: z.string().min(1, { message: "Please select an industry" }),
    yearsInBusiness: z.number().min(0, { message: "Years in business must be 0 or greater" }),
    annualRevenue: z.number().min(0, { message: "Annual revenue must be 0 or greater" }),
    creditScore: z.number().min(300).max(850, { message: "Credit score must be between 300 and 850" }),
    loanPurpose: z.string().min(10, { message: "Please provide more detail about the loan purpose" }),
    desiredLoanAmount: z.number().min(1000, { message: "Desired loan amount must be at least $1,000" }),
    collateralAvailable: z.boolean(),
    financialStatements: z.instanceof(FileList).refine((files) => files.length > 0, "Please upload your financial statements"),
})

export default function SmallBusinessProfileForm() {
    const [collateralAvailable, setCollateralAvailable] = useState(false)

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            businessName: "",
            industry: [],
            yearsInBusiness: 0,
            annualRevenue: 0,
            creditScore: 300,
            loanPurpose: "",
            desiredLoanAmount: 1000,
            // collateralAvailable: false,
        },
    })

    function onSubmit(values) {
        console.log(values)
        toast({
            title: "Profile created",
            description: "Your business profile has been created and financial information submitted.",
        })
    }

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>Create Your Business Profile</CardTitle>
                <CardDescription>Submit your business details and financial information</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                        {/* <FormField
                            control={form.control}
                            name="businessName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Business Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your business name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        /> */}
                        <FormField name="businessName">
                            <FormItem>
                                <FormLabel>Business Name</FormLabel>
                                <FormControl>
                                    <Input {...form.register("businessName")} placeholder="Enter your business Name" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </FormField>
                        <FormField name="industry">
                            <FormItem>
                                <FormLabel>Preferred Industries</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={(value) => form.setValue("industry", [...form.watch("industry"), value])}
                                        value={form.watch("industry")[form.watch("industry").length - 1]}
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
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormDescription>Selected: {form.watch("industry").join(", ")}</FormDescription>
                                <FormMessage />
                            </FormItem>
                        </FormField>
                        
                        
                        {/* <FormField
                            control={form.control}
                            name="yearsInBusiness"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Years in Business</FormLabel>
                                    <FormControl>
                                        <Input type="number" min={0} {...field} onChange={(e) => field.onChange(+e.target.value)} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        /> */}
                        <FormField name="yearsInBusiness">
                            <FormItem>
                                <FormLabel>Years in Busines</FormLabel>
                                <FormControl>
                                    <Input type="number" min={0} {...form.register("yearsInBusiness")} placeholder="Enter your business Name" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </FormField>
                        <FormField name="annualRevenue">
                            <FormItem>
                                <FormLabel>Annual Revenue (R)</FormLabel>
                                <FormControl>
                                    <Input type="number" min={0} {...form.register("annualRevenue")} placeholder="Enter your business Name" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </FormField>
                        {/* <FormField
                            control={form.control}
                            name="annualRevenue"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Annual Revenue ($)</FormLabel>
                                    <FormControl>
                                        <Input type="number" min={0} {...field} onChange={(e) => field.onChange(+e.target.value)} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        /> */}
                        <FormField name="creditScore">
                            <FormItem>
                                <FormLabel>Business Credit Score (R)</FormLabel>
                                <FormControl>
                                    <Input type="number" min={300} max={850} {...form.register("creditScore")} placeholder="Enter your business Name" />
                                </FormControl>
                                <FormDescription>Enter a value between 300 and 850</FormDescription>

                                <FormMessage />
                            </FormItem>
                        </FormField>
                        {/* <FormField
                            control={form.control}
                            name="creditScore"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Business Credit Score</FormLabel>
                                    <FormControl>
                                        <Input type="number" min={300} max={850} {...field} onChange={(e) => field.onChange(+e.target.value)} />
                                    </FormControl>
                                    <FormDescription>Enter a value between 300 and 850</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )} 
                        />*/}
                        <FormField name="loanPurpose">
                            <FormItem>
                                <FormLabel>Loan Purpose</FormLabel>
                                <FormControl>
                                    <Textarea type="text" min={300} max={850} {...form.register("loanPurpose")} placeholder="Describe the purpose of the loan" />
                                </FormControl>
                                <FormDescription>Enter a value between 300 and 850</FormDescription>

                                <FormMessage />
                            </FormItem>
                        </FormField>
                        <FormField name="desiredLoanAmount">
                            <FormItem>
                                <FormLabel>Desired Loan Amount (R)</FormLabel>
                                <FormControl>
                                    <Input type="number" min={1000} {...form.register("desiredLoanAmount")} placeholder="Describe the purpose of the loan" />
                                </FormControl>
                                <FormDescription>Enter a value between 300 and 850</FormDescription>

                                <FormMessage />
                            </FormItem>
                        </FormField>

                        {/* <FormField
                            control={form.control}
                            name="desiredLoanAmount"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Desired Loan Amount ($)</FormLabel>
                                    <FormControl>
                                        <Input type="number" min={1000} {...field} onChange={(e) => field.onChange(+e.target.value)} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        /> */}
                        <FormField name="collateralAvailable">
                            <FormItem>
                                <div className="space-y-0.5">
                                    <FormLabel className="text-base">Collateral Available</FormLabel>
                                    <FormDescription>
                                        Do you have assets to offer as collateral for the loan?
                                    </FormDescription>
                                </div>
                                <FormControl>
                                    <Input type="checkbox" min={1000}  {...form.register("collateralAvailable")} placeholder="Describe the purpose of the loan" />
                                </FormControl>                                
                                <FormMessage />
                            </FormItem>
                        </FormField>
                        <FormField name="financialStatements">
                            <FormItem>
                                <div className="space-y-0.5">
                                    <FormLabel className="text-base">Collateral Available</FormLabel>
                                    <FormDescription>
                                        Do you have assets to offer as collateral for the loan?
                                    </FormDescription>
                                </div>
                                <FormControl>
                                    <Input type="file" min={1000} accept=".pdf,.doc,.docx,.xls,.xlsx" {...form.register("financialStatements")} placeholder="Describe the purpose of the loan" />
                                </FormControl>
                                <FormDescription>
                                    Upload your balance sheet, income statement, and cash flow statement (PDF, DOC, or XLS)
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        </FormField>
                       
                        {/* <FormField
                            control={form.control}
                            name="financialStatements"
                            render={({ field: { onChange, value, ...rest } }) => (
                                <FormItem>
                                    <FormLabel>Upload Financial Statements</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="file"
                                            accept=".pdf,.doc,.docx,.xls,.xlsx"
                                            onChange={(e) => onChange(e.target.files)}
                                            {...rest}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Upload your balance sheet, income statement, and cash flow statement (PDF, DOC, or XLS)
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        /> */}
                        <Button type="submit" className="w-full">Create Profile and Submit Information</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}