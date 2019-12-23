#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define BUF 128
#define TOT 10

int main(int argc, char *argv[])
{
    FILE *fp = fopen(argv[1], "r");
    if (fp == NULL)
    {
        perror("Unable to open file!");
        exit(1);
    }

    char line[TOT][BUF];
    int i = 0;

    while (fgets(line[i], BUF, fp) != NULL)
    {
        line[i][strlen(line[i] - 1)] = '\0';
        i++;
    }

    fclose(fp);

    int j;
    for (j = 0; j < i; j++)
    {
        printf("%s\n", line[i]);
    }

    return 0;
}