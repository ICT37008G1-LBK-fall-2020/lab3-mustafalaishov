if (price.includes("$"))
{
    clear_usd = price.slice(1);
    usd = clear_usd * 2.6;
    alert ('₾'+usd);
}
if (price.includes("₾"))
{
    clear_gel = price.slice(1);
    gel = clear_gel / 2.6;
    alert ('$'+gel);
} 